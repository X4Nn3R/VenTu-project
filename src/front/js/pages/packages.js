import React, { useState, useEffect } from "react";
import PackageCard from "../component/PackageCard";
import { PackagesSlide } from "../component/PackagesSlide";
import { SearchBar } from "../component/SearchBar";
import { SearchResultsList } from "../component/SearchResultsList";
import SearchBarPrueba from "../component/SearchFormPackage";


export const PackagesList = () => {
    const [actividades, setActividades] = useState([]);
    const [results, setResults] = useState([]);
    const [people, setPeople] = useState('');

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/tourplans`);
                    const data = await response.json();
                    setActividades(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }, []);

    return (
        <div> 

            <div className="p-5"> 
                <SearchBar setResults={setResults}/>
                <SearchBarPrueba/>
                
            </div> 

             <PackagesSlide actividades={actividades}/>  

            <SearchResultsList results={results} />
            
            <div> 
                <PackageCard actividades={actividades} />
            </div>
            
            {/* <Filters filters={filters} setFilters={setFilters} /> */}
                
        </div>
    );
};

