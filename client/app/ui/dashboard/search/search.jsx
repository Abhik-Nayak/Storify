'use client';
import React from 'react'
import styles from "./search.module.css";
import { MdSearch } from 'react-icons/md';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const hadleSearch = (e) =>{
    const params = new URLSearchParams(searchParams);
    params.set("q",e.target.value);
    replace(`${pathName}?${params}`)
  }
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={hadleSearch}
      />
    </div>
  )
}

export default Search