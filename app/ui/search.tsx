'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useDebouncedCallback } from 'use-debounce';
import { ChangeEvent } from 'react';

export default function Search({ placeholder }: { placeholder: string }) {
  /** 取得 UrlSearchParams 物件 */
  const searchParams = useSearchParams()
  /** 使用 Url 變更的 method */
  const { replace } = useRouter()
  /** 取得目前的 path */
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    if (Boolean(value)) {
      params.set('query', value)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)


  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={handleSearch}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
