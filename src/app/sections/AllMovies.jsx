'use client'

import React from 'react'
import { AllMoviesContext, BrowseMoviesContext } from '../context/AllMoviesContext'
import AllMoviesCards from '../component/Cards/AllMoviesCards'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { FilterMoviesContext } from '../context/FilterContext';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState,Fragment } from 'react';

const people = [
    { genre: 'Sci-Fi' },
    { genre: 'Action' },
    { genre: 'Animation' },
    { genre: 'Horror' },
  ]

const AllMovies = () => {
    const [selected, setSelected] = useState(people[0])
    
    const {filter_movies , sorting} = FilterMoviesContext()
    console.log(filter_movies)

    const {isLoading, allmovies} = BrowseMoviesContext()
    // console.log(allmovies)

    if(isLoading){
        return(
            <>
            <div className='mx-auto w-[1000px]'>
                <Box style={{ width: 300 }}>
                    <Skeleton width={300} height={300} variant='rounded' animation="wave" />
                </Box>
            </div>
            </>
        )
    }

  return (
    <div className='w-[1000px] mx-auto'>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold text-3xl'>CineBase Collection:-</h1>
            <div className="w-72">
                <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selected.genre}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person, personIdx) => (
                        <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                            }`
                        }
                        value={person}
                        >
                        {({ selected }) => (
                            <>
                            <span
                                className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                                }`}
                            >
                                {person.genre}
                            </span>
                            {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                            ) : null}
                            </>
                        )}
                        </Listbox.Option>
                    ))}
                    </Listbox.Options>
                </Transition>
                </div>
            </Listbox>
    </div>
        </div>
        <div className='flex flex-wrap gap-5 mt-5'>
            {allmovies.map((items)=>{
                return(
                items.media.map((item)=>{
                    return (
                        <div className='flex gap-5' key={items.id}>
                            <AllMoviesCards moviename={`${items.moviename}`} movieposter={`${item.imageurl}`}/>
                        </div>
                    )
                })
                )
            })}
        </div>
    </div>
  )
}

export default AllMovies
