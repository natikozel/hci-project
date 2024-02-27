import {memo, useState} from 'react';
import type {FC} from 'react';

import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon} from './VectorIcon';
import {useNavigate, useParams} from "react-router-dom";
import Cookies from "universal-cookie";
import Payment from "payment";

interface Props {
    className?: string;
}

/* @figmaId 66:86 */
export const EditAddress: FC<Props> = memo(function GalileoDesign(props = {}) {

    const cookies = new Cookies();
    const navigate = useNavigate();
    const {myId}: any = useParams();
    const [user, setUser] = useState({
        city: '',
        street: '',
        street2: '',
        zipcode: ''
    });
    const [error, setError] = useState({
        city: false,
        street: false,
        street2: false,
        zipcode: false,
    });

    const validateInput = () => {


        let isTrue = true;

        if (!user.city) {
            setError(prevState => {
                return {
                    ...prevState,
                    city: true
                };
            });
            isTrue = false;
        }
        if (!user.street) {
            setError(prevState => {
                return {
                    ...prevState,
                    street: true
                };
            });
            isTrue = false;
        }
        if (!user.street2) {
            setError(prevState => {
                return {
                    ...prevState,
                    street2: true
                };
            });
            isTrue = false;
        }
        if (!user.zipcode || user.zipcode.toString().length < 6) {
            setError(prevState => {
                return {
                    ...prevState,
                    zipcode: true
                };
            });
            isTrue = false;
        }
        return isTrue;


    };

    const handleSubmit = () => {
        if (validateInput()) {
            const oldCookie = cookies.get(myId);
            cookies.set(myId, {
                card: oldCookie.card,
                date: oldCookie.date,
                id: oldCookie.id,
                payment: oldCookie.payment,
                taxes: oldCookie.taxes,
                zipcode: user.zipcode,
                city: user.city,
                street: user.street,
                street2: user.street2,
                name: oldCookie.name,
                status: oldCookie.status,
            });
            navigate('done')
        } else {
            return;
        }

    };


    const handleInputFocus = (e: any) => {
        setError({
            city: false,
            street: false,
            street2: false,
            zipcode: false,
        });
    };

    const editInput = (e: any) => {
        setUser((prevState: any) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            };
        });
    };


    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.depthFrame}>
                <div className={classes.depth1Frame}>
                    <div className={classes.depth2Frame}>
                        <div className={classes.depth3Frame}>
                            <button className={classes.depth4Frame} onClick={() => navigate(-1)}>
                                <div className={classes.depth5Frame}>
                                    <div className={classes.vector}>
                                        <VectorIcon className={classes.icon}/>
                                    </div>
                                    <div className={classes.depth6Frame}></div>
                                </div>
                            </button>
                        </div>
                        <div className={classes.depth3Frame1}>
                            <div className={classes.depth4Frame2}>
                                <div className={classes.depth5Frame2}>
                                    <div className={classes.shippingAddress}>פרטי הכתובת החדשה</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.depth3Frame2}>
                            <div className={classes.depth4Frame3}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame1}>
                    <div className={classes.depth2Frame2}>
                        <div className={classes.depth3Frame3}>
                            <div className={classes.depth4Frame4}>
                                <div style={{direction: "rtl"}} className={classes.firstName}>עיר</div>
                            </div>
                            <div style={{direction: "rtl"}} className={classes.cfont4}>
                                {error.city ?
                                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>
                                        {"שדה זה חייב להכיל שם עיר בישראל"}
                                    </h1>
                                    : null
                                }
                            </div>
                            <div className={classes.depth4Frame1}>
                                <div className={classes.depth5Frame3}>
                                    <div style={{textAlign: "right"}} className={classes.depth7Frame}>
                                        <input style={{direction: "rtl", textAlign: "right"}} type={"text"}
                                               name={"city"} onFocus={handleInputFocus}
                                               value={user.city} onChange={editInput}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={classes.depth1Frame1}>
                    <div className={classes.depth2Frame2}>
                        <div className={classes.depth3Frame3}>
                            <div className={classes.depth4Frame4}>
                                <div style={{direction: "rtl"}} className={classes.firstName}>רחוב</div>
                            </div>
                            <div style={{direction: "rtl"}} className={classes.cfont5}>
                                {error.street ?
                                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>
                                        {"שדה זה חייב להכיל שם רחוב בעיר שלך"}
                                    </h1>
                                    : null
                                }
                            </div>
                            <div className={classes.depth4Frame1}>
                                <div className={classes.depth5Frame3}>
                                    <div style={{textAlign: "right"}} className={classes.depth7Frame}>
                                        <input style={{direction: "rtl", textAlign: "right"}} type={"text"}
                                               name={"street"} onFocus={handleInputFocus}
                                               value={user.street} onChange={editInput}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.depth1Frame1}>
                    <div className={classes.depth2Frame2}>
                        <div className={classes.depth3Frame3}>
                            <div className={classes.depth4Frame4}>
                                <div style={{direction: "rtl"}} className={classes.firstName}>מס' דירה</div>
                            </div>
                            <div style={{direction: "rtl"}} className={classes.cfont7}>
                                {error.street2 ?
                                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>
                                        {"שדה זה חייב להכיל את מספר הדירה"}
                                    </h1>
                                    : null
                                }
                            </div>
                            <div className={classes.depth4Frame1}>
                                <div className={classes.depth5Frame3}>
                                    <div style={{textAlign: "right"}} className={classes.depth7Frame}>
                                        <input style={{direction: "rtl", textAlign: "right"}} type={"text"}
                                               name={"street2"} onFocus={handleInputFocus}
                                               value={user.street2} onChange={editInput}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={classes.depth1Frame1}>
                    <div className={classes.depth2Frame2}>
                        <div className={classes.depth3Frame3}>
                            <div className={classes.depth4Frame4}>
                                <div style={{direction: "rtl"}} className={classes.firstName}>מיקוד</div>
                            </div>
                            <div style={{direction: "rtl"}} className={classes.cfont6}>
                                {error.zipcode ?
                                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>
                                        {"שדה זה חייב להכיל את המיקוד התקין"}
                                    </h1>
                                    : null
                                }
                            </div>
                            <div className={classes.depth4Frame1}>
                                <div className={classes.depth5Frame3}>
                                    <div style={{textAlign: "right"}} className={classes.depth7Frame}>
                                        <input style={{direction: "rtl", textAlign: "right"}} type={"text"}
                                               name={"zipcode"} onFocus={handleInputFocus}
                                               value={user.zipcode} onChange={editInput}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className={classes.depth1Frame2}>*/}
                {/*    <div className={classes.depth2Frame3}>*/}
                {/*        <div className={classes.depth3Frame4}>*/}
                {/*            <div className={classes.depth4Frame5}>*/}
                {/*                <div className={classes.lastName}>Last name</div>*/}
                {/*            </div>*/}
                {/*            <div className={classes.depth4Frame12}>*/}
                {/*                <div className={classes.depth5Frame4}>*/}
                {/*                    <div className={classes.depth6Frame3}>*/}
                {/*                        <div className={classes.depth7Frame2}>*/}
                {/*                            <div className={classes.zhou}>Zhou</div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={classes.depth1Frame3}>*/}
                {/*    <div className={classes.depth2Frame4}>*/}
                {/*        <div className={classes.depth3Frame5}>*/}
                {/*            <div className={classes.depth4Frame6}>*/}
                {/*                <div className={classes.city}>City</div>*/}
                {/*            </div>*/}
                {/*            <div className={classes.depth4Frame13}>*/}
                {/*                <div className={classes.depth5Frame5}>*/}
                {/*                    <div className={classes.depth6Frame4}>*/}
                {/*                        <div className={classes.depth7Frame3}>*/}
                {/*                            <div className={classes.enterCity}>Enter city</div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={classes.depth1Frame4}>*/}
                {/*    <div className={classes.depth2Frame5}>*/}
                {/*        <div className={classes.depth3Frame6}>*/}
                {/*            <div className={classes.depth4Frame7}>*/}
                {/*                <div className={classes.street}>Street</div>*/}
                {/*            </div>*/}
                {/*            <div className={classes.depth4Frame14}>*/}
                {/*                <div className={classes.depth5Frame6}>*/}
                {/*                    <div className={classes.depth6Frame5}>*/}
                {/*                        <div className={classes.depth7Frame4}>*/}
                {/*                            <div className={classes.enterStreet}>Enter street</div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={classes.depth1Frame5}>*/}
                {/*    <div className={classes.depth2Frame6}>*/}
                {/*        <div className={classes.depth3Frame7}>*/}
                {/*            <div className={classes.depth4Frame8}>*/}
                {/*                <div className={classes.zipCode}>Zip Code</div>*/}
                {/*            </div>*/}
                {/*            <div className={classes.depth4Frame15}>*/}
                {/*                <div className={classes.depth5Frame7}>*/}
                {/*                    <div className={classes.depth6Frame6}>*/}
                {/*                        <div className={classes.depth7Frame5}>*/}
                {/*                            <div className={classes.enterZipCode}>Enter zip code</div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <br/>
                <div className={classes.depth1Frame7}>
                    <button className={classes.depth2Frame7} onClick={handleSubmit}>
                        <div className={classes.depth3Frame8}>
                            <div className={classes.depth4Frame9}>
                                <div className={classes.saveAndContinue}>שמור והמשך</div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={classes.depth1Frame8}></div>
            </div>
        </div>
    );
});
