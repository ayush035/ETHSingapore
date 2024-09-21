import { useAccount, useEnsName } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from 'react';

export default function FetchENS() {
  const { address, isConnected } = useAccount();
  const { data: ensName, isLoading, isError, error } = useEnsName({
    address, // Pass wallet address to fetch ENS
    enabled: !!address, // Only run if address exists
  });

  const [displayName, setDisplayName] = useState('');

  // Update the display name when ENS is fetched or fallback to address
  useEffect(() => {
    if (ensName) {
      setDisplayName(ensName);
    } else if (address) {
      setDisplayName(address);
    }
  }, [ensName, address]);

  return (
    <div>
      <ConnectButton />
      {isConnected && (
        <div>
          {isLoading ? (
            <p>Loading ENS...</p>
          ) : isError ? (
            <>
              <p>Could not fetch ENS name</p>
              <p>Error: {error?.message}</p> {/* Show error message for debugging */}
            </>
          ) : (
            <p>Connected as: {displayName}</p>
          )}
        </div>
      )}
    </div>
  );
}
