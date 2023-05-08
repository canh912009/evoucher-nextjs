import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const SearchPage = () => {
    const router = useRouter();
    const searchStr = router.query.q || '';  //Router.push(`/search?q=${queryStr}`);

    useEffect(() => {
        if (!searchStr) {
            router.push("/")
        }
    }, [])

    return (
        <div>search</div>
    )
}

export default SearchPage