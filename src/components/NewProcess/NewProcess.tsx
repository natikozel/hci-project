import {memo, useState} from 'react';
import type {FC} from 'react';
import DatePicker from 'react-datepicker';
import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon2} from './VectorIcon2';
import {VectorIcon} from './VectorIcon';
import {useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";

interface Props {
    className?: string;
}


/* @figmaId 18:320 */
export const NewProcess: FC<Props> = memo(function GalileoDesign(props = {}) {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [id, setId]: any = useState();
    const [status, setStatus] = useState("דייר יוצא");
    const [dateTitle, setDateTitle] = useState("תאריך יציאה");
    const [date, setDate]: any = useState();
    const [isFailed, setIsFailed] = useState([
        {
            id: false,
            message: ''
        },
        {
            status: false,
            message: ''
        },
        {
            date: false,
            message: ''
        }
    ]);
    const [used, setUsed] = useState(false);

    const onStatusChange = (e: any) => {
        setStatus(e.target.textContent);
        setDateTitle(e.target.textContent === "דייר יוצא" ? "תאריך יציאה" : "תאריך כניסה");
    };

    const onIdChange = (e: any) => {
        if (e.target.value.toString().length > 9)
            return;
        setId(e.target.value);
    };

    const onSubmit = () => {

        if (!id || id.length !== 9) {
            setIsFailed(prevState => {
                const newArr = [...prevState];
                let newId = newArr.find((i: any) => i.id === false);
                newId = {
                    id: true,
                    message: "מספר הזהות חייב להכיל 9 ספרות בדיוק!"
                };
                newArr[0] = newId;
                return newArr;
            });
        }

        if (!status) {
            setIsFailed(prevState => {
                const newArr = [...prevState];
                let newStatus = newArr.find((i: any) => i.status === false);
                newStatus = {
                    status: true,
                    message: "אנא בחר סטטוס דייר."
                };
                newArr[1] = newStatus;
                return newArr;
            });
        }

        if (!date) {
            setIsFailed(prevState => {
                const newArr = [...prevState];
                let newDate = newArr.find((i: any) => i.date === false);
                newDate = {
                    date: true,
                    message: "אנא בחר תאריך"
                };
                newArr[2] = newDate;
                return newArr;
            });
        }

        if (!id || id.length !== 9 || !date || !status)
            return;

        if (!!cookies.get(id)) {
            setUsed(true);
            return;
        }
        const myCookie = {
            id,
            status,
            date: date!.value!,
            payment: false,
            card: null,
            taxes: [
                {
                    name: "ארנונה מקרקעין",
                    amount: 170,
                    paid: false,
                },
                {
                    name: "שבח",
                    amount: 350,
                    paid: false,
                },
                {
                    name: "רכוש",
                    amount: 100,
                    paid: false,
                },
                {
                    name: "מים",
                    amount: 75,
                    paid: false,
                },
                {
                    name: "חשמל",
                    amount: 850,
                    paid: false,
                },
            ],
        };
        cookies.set(id!, JSON.stringify(myCookie));
        navigate(`/myProcess/${myCookie.id}`);
    };

    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.depthFrame}>
                <div className={classes.depth1Frame}>
                    <div className={classes.depth2Frame}>
                        <button className={classes.depth3Frame} onClick={() => navigate("/")}>
                            <div className={classes.depth4Frame}>
                                <div className={classes.depth5Frame}>
                                    <div className={classes.vector}>
                                        <VectorIcon className={classes.icon}/>
                                    </div>
                                    <div className={classes.depth6Frame}></div>
                                </div>
                            </div>
                        </button>
                        <div className={classes.depth3Frame1}>
                            <div className={classes.depth4Frame2}>
                                <div className={classes.depth5Frame2}>
                                    <div className={classes.transferAccount}>תהליך חדש</div>
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
                        <div className={classes.toGetStartedWeLlNeedAFewDetail}>
                            {used ?
                                <h1 style={{direction: "rtl", color: "red"}} className={classes.cfont}>"למספר זהות זה
                                    כבר משוייך תהליך, אנא בדוק פרטיך."</h1> : null}
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame1}>
                    <div className={classes.depth2Frame2}>
                        <div className={classes.accountHolderID}>מספר זהות</div>
                    </div>
                </div>
                {isFailed.find((i: any) => i.id === true) ?
                    <div style={{direction: "rtl"}} className={classes.toGetStartedWeLlNeedAFewDetail}>
                            <h1 style={{direction: "rtl", color: "red", textAlign: "right"}}
                                className={classes.cfont}>
                                {isFailed.find((i: any) => i.id === true)?.message}
                            </h1>
                    </div>
                    : null}
                <div className={classes.depth1Frame2}>
                    <div className={classes.depth2Frame3}>
                        <div className={classes.depth3Frame3}>
                            <div className={classes.depth4Frame4}>
                                <div className={classes.depth5Frame3}>
                                    <input required minLength={9} maxLength={9} onChange={onIdChange} value={id}
                                           type="number"
                                           placeholder={"הזן את מספר הזהות שלך כאן"}
                                           className={classes.enterYourAccountHolderID}
                                           onFocus={() => {
                                               setIsFailed(prevState => {
                                                   const newArr = [...prevState];
                                                   let newId = newArr.find((i: any) => i.id === true);
                                                   newId = {
                                                       id: false,
                                                       message: "מספר הזהות חייב להכיל 9 ספרות בדיוק!"
                                                   };
                                                   newArr[0] = newId;
                                                   return newArr;
                                               });
                                               setUsed(false);
                                           }}
                                    >
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame3}>
                    <div className={classes.depth2Frame4}>
                        <div className={classes.residentStatus}>סטטוס</div>
                    </div>
                </div>
                <div className={classes.depth1Frame4}>
                    <div className={classes.depth2Frame5}>
                        <div
                            className={status === "דייר יוצא" ? classes.selectedStatus : classes.unselectedStatus}
                            onClick={onStatusChange}>
                            <div className={classes.depth4Frame5}>
                                <div className={classes.depth5Frame4}>
                                    <div
                                        className={status === "דייר יוצא" ? classes.selectedResident : classes.unselectedResident}>
                                        דייר יוצא
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={status === "דייר נכנס" ? classes.selectedStatus : classes.unselectedStatus}
                            onClick={onStatusChange}>
                            <div className={classes.depth4Frame6}>
                                <div className={classes.depth5Frame5}>
                                    <div
                                        className={status === "דייר נכנס" ? classes.selectedResident : classes.unselectedResident}>דייר
                                        נכנס
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={classes.depth1Frame5}>
                    <div className={classes.depth2Frame6}>
                        <div className={classes.leavingEnteringDate}>{dateTitle}</div>
                    </div>
                </div>
                {isFailed.find((i: any) => i.date === true) ?
                    <div style={{direction: "rtl"}} className={classes.toGetStartedWeLlNeedAFewDetail}>
                        <h1 style={{direction: "rtl", color: "red", textAlign: "right"}}
                            className={classes.cfont}>
                            {isFailed.find((i: any) => i.date === true)?.message}
                        </h1>
                    </div>
                    : null}
                <div className={classes.depth1Frame6}>
                    <div className={classes.depth5Frame6}>
                        <input className={classes.dates} type={"date"}
                               onChange={(date: any) => {
                                   setDate(date.target);
                                   setIsFailed(prevState => {
                                       const newArr = [...prevState];
                                       let newDate = newArr.find((i: any) => i.date);
                                       newDate = {
                                           date: true,
                                           message: "אנא בחר תאריך."
                                       };
                                       return newArr;
                                   });
                               }}
                               onFocus={() => {
                                   setIsFailed(prevState => {
                                       const newArr = [...prevState];
                                       let newDate = newArr.find((i: any) => i.date === true);
                                       newDate = {
                                           date: false,
                                           message: ""
                                       };
                                       newArr[2] = newDate;
                                       return newArr;
                                   });
                               }
                               }
                        />
                        <div className={classes.depth6Frame1}>
                            <div className={classes.depth7Frame3}>
                                <div className={classes.vector2}>
                                    <VectorIcon2 className={classes.icon2}/>
                                </div>
                                <div className={classes.depth8Frame}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>

                <div className={classes.depth1Frame8}>
                    <button className={classes.depth2Frame8} onClick={onSubmit}>
                        <div className={classes.depth3Frame6}>
                            <div className={classes.depth4Frame8}>
                                <div className={classes.create}>החל תהליך</div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={classes.depth1Frame9}></div>
            </div>
        </div>
    );

});
