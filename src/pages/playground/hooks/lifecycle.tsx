import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import Button from '@/components/Button';

let isRun: boolean = false;

const LifeCycle = () => {
    // Dong dau tien... contructor (same), chạy 1 lần đầu tiên duy nhất và phải trước khi render
    /* if (isRun === false) {
        console.log("contructor  ");
        isRun = true;
    } // -> Tip trick useMemo */

    // Tip trick useMemo --> same Contructor
    useMemo(() => {
        console.log("contructor - useMemo");
    }, []);

    // Destructring để phân rã Array đó thành 2 phần tử :  [giá trị của state, hàm set lại state]
    const [counter, setCounter] = useState(0);
    const [visiable, setVisiable] = useState(true);
    const [user, setUser] = useState({
        firstName: 'Canh',
        lastName: 'Nguyen'
    });

    const inputFileEl = useRef(null);

    // const [state, setState] = useState({ //*state all
    //     counter: 0,
    //     visiable: true
    // });  
    // --> khi dùng hooks ko nên gộp vào ntn vì chỗ setState bắt buộc phải set hết

    // same componentDidMount + componentDidUpdate: , dc goi sau khi render xong
    useEffect(() => {
        // Cập nhập document title sử dụng browser API
        console.log("useEffect run - bất kế state nào có thay đổi");

        return () => {
            // same when componentWillUnmount <-> Component will remove from DOM
        }
    });  // <-- ko truyen deps --> lắng nghe hết

    useEffect(() => {
        console.log("useEffect run - 1 lần duy nhất sau khi render lần đầu tiên");
    }, []);  // <-- deps rỗng --> ko lắng nghe gì cả

    useEffect(() => {
        console.log("useEffect run - lắng nghe sự thay đổi của counter");
    }, [counter]);  // <-- truyen counter , same componentWillUpdate (lắng nghe update) cho riêng counter

    useEffect(() => {
        console.log("useEffect run - lắng nghe sự thay đổi của visiable");
    }, [visiable]);  // <-- visiable, same componentWillUpdate  (lắng nghe update) cho riêng visiable

    useEffect(() => {
        console.log("useEffect run - lắng nghe sự thay đổi của visiable và counter");
    }, [visiable, counter]);

    // ko đc lạm dụng chỉ dùng khi hàm cần cache cái tính toán phức tạp 
    const fullName: string = useMemo(() => {
        return user.firstName + user.lastName;
    }, [user]);

    // this test same useMemo, ko nên lạm dụng , Dùng khi có dữ liệu lớn, render đồ thị/editor soạn thảo văn bản...
    const handleClickCounter = useCallback(
        () => {
            setCounter(counter + 1);
        }, [visiable]
    );

    return (
        <div className='container'>
            <h1>lifecycle , hi {fullName}</h1>

            <button onClick={handleClickCounter}>Counter Add</button>
            {/* <button onClick={() => { setCounter((prevCounter) => { return prevCounter + 1 }) }}>Counter Add</button> */}
            <p>{counter}</p>

            {/* <button onClick={() => { //*state all
                 setState({
                    counter: state.counter + 1,
                    visiable: true
                })
            }}>Counter Add </button>
                // --> setState bắt buộc phải set hết
            <p>{state.counter}</p> */}

            <button onClick={() => {
                setVisiable(false)
            }}> Hide Btton </button>
            {visiable && <Button />}

            <hr />

            {/* useRef */}
            <input ref={inputFileEl} type="file" />
            <button
                onClick={() => {
                    console.log(inputFileEl.current);
                    // inputFileEl.current.click();
                    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
                    input.click();
                }}
                className='upload'>Upload Image</button>

        </div>
    )
}

export default LifeCycle;