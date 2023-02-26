# dd command, the swap file is 4 GB (128 MB x 32):
sudo dd if=/dev/zero of=/swapfile bs=128M count=32

#Update the read and write permissions for the swap file:
sudo chmod 600 /swapfile

# Set up a Linux swap area:
sudo mkswap /swapfile

# Make the swap file available for immediate use by adding the swap file to swap space:
sudo swapon /swapfile

# Verify that the procedure was successful:
sudo swapon -s

# Start the swap file at boot time by editing the /etc/fstab file.
sudo echo /swapfile swap swap defaults 0 0 > /etc/fstab
