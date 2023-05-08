import React, { FormEvent, useState } from 'react'
import Router from 'next/router';

const HeaderSearch = () => {
    const [queryStr, setQueryStr] = useState('');

    function onChange(e: any) {
        setQueryStr(e.target.value)
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        if (queryStr) Router.push(`/search?q=${queryStr}`);
    }

    return (
        <div className="ass1-header__search">
            <form action="#" onSubmit={handleSubmit}>
                <label>
                    <input
                        type="search" name="search-text"
                        className="form-control" placeholder="Nhập từ khóa ..."
                        value={queryStr}
                        onChange={onChange}
                    />
                    <i className="icon-Search" />
                </label>
            </form>
        </div>
    )
}

export default HeaderSearch