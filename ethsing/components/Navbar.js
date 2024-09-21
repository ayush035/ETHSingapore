import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import  '@/styles/Home.module.css'
import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit'

export default function Navbar() {

    const handleProof = function(result) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, 3000);
            // NOTE: Example of how to decline the verification request and show an error message to the user
        });
    };
    
    const onSuccess = function(result) {
        console.log(result);
    };

    return (
        
            <>
                        {/* <div className=" h-6 my-4 px-8  text-black mx-16 rounded-lg font-mono font-semibold text-center" >
           Thankyou for supporting us on GG21 and Giv-ARB QF rounds! Your love and support means world to us .

            </div>
            <hr  /> */}

        
            <nav className=' flex justify-between h-12 text-blue-500 bg-white   font-bold' >
                <span className='mx-20 my-2 flex text-blue-500 text-2xl  '><Link href={"/"}>Socx</Link></span>
                <ul className= 'px-2 py-3 flex space-x-10 mx-12 '>
                    

             <div>
        <input className='px-4 rounded-lg text-smfont-semibold font-mono h-8 outline outline-offset-2 outline-slate-300 outline-width:4px hover:outline-blue-500 outline-width: 4px' type="search" placeholder="Search..." />
        </div>
        {/* <div className='hover:text-black delay-50  text-md font-semibold font-mono'> */}
        
            {/* <Link href="/search">Naming service</Link></div> */}
        
        
            {/* <Link href="/search">Search</Link> */}

            <div className='hover:text-black delay-50  text-md font-semibold font-mono'>
        
            <Link href="/newpost">Post</Link></div>

        <div className='hover:text-black delay-50 text-md font-semibold font-mono '>
    
            <Link href="/profile">Profile</Link></div>

            <div className='hover:text-black delay-50  text-md font-semibold font-mono'>
        
            <Link href="/explore">Explore</Link></div>

            <div className='hover:text-black delay-50 text-lg font-semibold font-mono '>
        <IDKitWidget
					action="id_verification"
					signal="my_signal"
					onSuccess={onSuccess}
					handleVerify={handleProof}
					app_id="app_staging_073c6b3b4db6f8d30a1b61634f53c0b5"
					// walletConnectProjectId="get_this_from_walletconnect_portal"
				>
					{({ open }) => <button onClick={open}>Verification</button>}
				</IDKitWidget>
</div>         
              {/* <div className=' mx-2 my-2 '> */}            
        <ConnectButton/>
        

            </ul>
        </nav>
        
       
        </>
        
        );
        }