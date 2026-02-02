#!/bin/bash
echo "=== WebdriverIO + Electron Diagnostic Script ==="
echo

# Check display
echo "1. DISPLAY Environment:"
echo "DISPLAY=$DISPLAY"
echo

# Check Xvfb
echo "2. Xvfb Status:"
if command -v xvfb-run &> /dev/null; then
    echo "✅ Xvfb is installed"
else
    echo "❌ Xvfb not found - installing..."
    sudo apt-get update && sudo apt-get install -y xvfb
fi
echo

# Check executable
echo "3. Electron Binary:"
BINARY_PATH="/home/luca/Documents/projects/portfolio2026/caardinator/release/0.0.0/linux-unpacked/caardinator"
if [ -f "$BINARY_PATH" ]; then
    echo "✅ Binary exists: $BINARY_PATH"
    echo "Permissions: $(ls -la "$BINARY_PATH")"
    echo "File type: $(file "$BINARY_PATH")"
else
    echo "❌ Binary not found: $BINARY_PATH"
fi
echo

# Check Chrome dependencies
echo "4. Chrome Dependencies:"
ldd "$BINARY_PATH" | grep "not found" || echo "✅ All dependencies found"
echo

# Test run with Xvfb
echo "5. Test Electron launch with Xvfb:"
timeout 5s xvfb-run -a "$BINARY_PATH" --version 2>&1 || echo "❌ Failed to launch"
echo

# Check WebdriverIO versions
echo "6. WebdriverIO Versions:"
echo "@wdio/cli: $(npm list @wdio/cli 2>/dev/null | grep @wdio/cli || echo 'Not found')"
echo "wdio-electron-service: $(npm list wdio-electron-service 2>/dev/null | grep wdio-electron-service || echo 'Not found')"
echo

echo "=== Diagnostic Complete ==="