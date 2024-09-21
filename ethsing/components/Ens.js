import { useEffect, useState } from 'react';
import { useAccount, useEnsName } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function AutoFetchENS() {
  const { address, isConnected } = useAccount();  // Get the wallet address and connection status
  const { data: ensName, isLoading } = useEnsName({ address });  // Automatically fetch ENS name based on connected wallet
  const [displayName, setDisplayName] = useState('');

  // Update the display name when ENS name is fetched or fallback to the wallet address
  useEffect(() => {
    if (ensName) {
      setDisplayName(ensName);
    } else if (address) {
      setDisplayName(address);
    }
  }, [ensName, address]);

  return (
    <div>
      {/* RainbowKit Wallet Connect Button */}
      <ConnectButton />

      {isConnected && (
        <div className=' text-black'>
          {isLoading ? (
            <p>Loading ENS...</p>
          ) : (
            <p>Connected as: {displayName}</p> // Display ENS or wallet address
          )}
        </div>
      )}
    </div>
  );
}
