icacls.exe "dev.pem" /reset
icacls.exe "dev.pem" /grant:r "$($env:username):(r)"
icacls.exe "dev.pem" /inheritance:r

