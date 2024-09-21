import '@/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import Footer from '../components/Footer';
import { AppProps } from 'next/app';

import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  lightTheme
} from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, http } from 'wagmi'
import { zetachain, zksync, arbitrum, zetachainAthensTestnet, sepolia, celo, mainnet } from 'wagmi/chains'
import { getDefaultConfig, } from '@rainbow-me/rainbowkit'

const Morpholesky = {
  id: 2810,
  name: 'Morph Holesky',

  iconBackground: '#fff',
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc-holesky.morphl2.io	'] },
  },
  blockExplorers: {
    default: { name: 'Morph holesky explorer', url: 'https://explorer-holesky.morphl2.io/' },
  },
  // contracts: {
  //   multicall3: {
  //     address: '0xca11bde05977b3631167028862be2a173976ca11',
  //     blockCreated: 11907934,
  //   },
  }



const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: '9c17dc69becbe137fe50e55e31598852',
  chains: [ Morpholesky, mainnet],
  transports: {
    [arbitrum.id]: http(),
    [mainnet.id]: http(),

    [zetachain.id]: http(),
    [zetachainAthensTestnet.id]: http(),
    [zksync.id]: http(),
    [celo.id]: http(),
    [Morpholesky.id]: http(),





  },
})
const queryClient = new QueryClient()




function MyApp({ Component, pageProps }) {
  return (
<WagmiProvider config={config}>
<QueryClientProvider  client={queryClient}>
        <RainbowKitProvider 
        initialChain={4}
        theme={lightTheme({
          accentColor: '#42A5F5',
          accentColorForeground: 'white',
          borderRadius: 'medium',
        })}
      >
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </RainbowKitProvider>
      </QueryClientProvider>
      </WagmiProvider>

    );
}

export default MyApp;
