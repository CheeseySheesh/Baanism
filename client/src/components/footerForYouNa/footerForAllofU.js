import './footerForAllofYou.css'
import { Link } from 'react-router-dom';

export default function footerForAllofYou(){
    return(
        <>
            <div className='footerForAllofYouContainer'>
                <p>Copyright © 2023 BAANISM Co., Ltd. All rights reserved.</p>
                <ul className='footerForAllofYouULStyle'>
                    <li>
                        <Link>
                        <p>นโยบายการใช้งาน</p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <p>ติดต่อสอบถาม</p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <p>เงื่อนไขการใช้งาน</p>
                        </Link>
                    </li>
                </ul>
                
            </div>
        </>
    )
}