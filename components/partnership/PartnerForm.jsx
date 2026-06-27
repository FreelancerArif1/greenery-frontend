"use client"
import React, {useEffect, useState, useRef} from 'react';
import styled from "styled-components";
import {Container, Row, Col, Form} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {Black, White,Bg} from "@/styles/globalStyleVars";
import axios from "axios";
import useIsMobile from "@/hooks/useIsMobile";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainButton from "@/components/common/Buttons/MainButton";
import Select, {components} from "react-select";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const MyComponent = ({data}) => {

    const leftImg=data?.images?.list?.find((e)=>e?.left_image==="on")?.full_path;
    const rightImg=data?.images?.list?.find((e)=>e?.right_image==="on")?.full_path;

    const isMobile = useIsMobile();
    const bigImgRef = useRef(null);
    const [isLargeDevice, setIsLargeDevice] = useState(false);

    const {register, control, handleSubmit, formState: {errors, isSubmitSuccessful}, reset, watch} = useForm({
        mode: "all",
    })

    // Check if device is larger than 991px
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeDevice(window.innerWidth > 991);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Complete Bangladesh Locations Data (All 8 Divisions)
    const bangladeshLocations = [
        {
            value: 'dhaka',
            label: 'Dhaka',
            districts: [
                {
                    value: 'dhaka_district',
                    label: 'Dhaka',
                    subDistricts: [
                        { value: 'adabor', label: 'Adabor' },
                        { value: 'banasree', label: 'Banasree' },
                        { value: 'dakshin_khan', label: 'Dakshin Khan' },
                        { value: 'gulshan', label: 'Gulshan' },
                        { value: 'motijheel', label: 'Motijheel' },
                        { value: 'siddeshwari', label: 'Siddeshwari' },
                        { value: 'uttara', label: 'Uttara' },
                        { value: 'mirpur', label: 'Mirpur' },
                    ]
                },
                {
                    value: 'gazipur',
                    label: 'Gazipur',
                    subDistricts: [
                        { value: 'gazipur_sadar', label: 'Gazipur Sadar' },
                        { value: 'kapashia', label: 'Kapashia' },
                        { value: 'sreepur', label: 'Sreepur' },
                        { value: 'kaliakair', label: 'Kaliakair' },
                    ]
                },
                {
                    value: 'narayanganj',
                    label: 'Narayanganj',
                    subDistricts: [
                        { value: 'narayanganj_sadar', label: 'Narayanganj Sadar' },
                        { value: 'araihazar', label: 'Araihazar' },
                        { value: 'bandar', label: 'Bandar' },
                        { value: 'rupganj', label: 'Rupganj' },
                    ]
                },
                {
                    value: 'tangail',
                    label: 'Tangail',
                    subDistricts: [
                        { value: 'tangail_sadar', label: 'Tangail Sadar' },
                        { value: 'basail', label: 'Basail' },
                        { value: 'delduar', label: 'Delduar' },
                        { value: 'ghatail', label: 'Ghatail' },
                        { value: 'kalihati', label: 'Kalihati' },
                    ]
                },
                {
                    value: 'faridpur',
                    label: 'Faridpur',
                    subDistricts: [
                        { value: 'faridpur_sadar', label: 'Faridpur Sadar' },
                        { value: 'alfadanga', label: 'Alfadanga' },
                        { value: 'boalmari', label: 'Boalmari' },
                        { value: 'madaripur', label: 'Madaripur' },
                    ]
                },
                {
                    value: 'madaripur',
                    label: 'Madaripur',
                    subDistricts: [
                        { value: 'madaripur_sadar', label: 'Madaripur Sadar' },
                        { value: 'kalkini', label: 'Kalkini' },
                        { value: 'rajoir', label: 'Rajoir' },
                        { value: 'shibchar', label: 'Shibchar' },
                    ]
                },
                {
                    value: 'munshiganj',
                    label: 'Munshiganj',
                    subDistricts: [
                        { value: 'munshiganj_sadar', label: 'Munshiganj Sadar' },
                        { value: 'gajaria', label: 'Gajaria' },
                        { value: 'lohajang', label: 'Lohajang' },
                        { value: 'tongibari', label: 'Tongibari' },
                    ]
                },
                {
                    value: 'rajbari',
                    label: 'Rajbari',
                    subDistricts: [
                        { value: 'rajbari_sadar', label: 'Rajbari Sadar' },
                        { value: 'baliakandi', label: 'Baliakandi' },
                        { value: 'kalukhali', label: 'Kalukhali' },
                    ]
                },
                {
                    value: 'shariatpur',
                    label: 'Shariatpur',
                    subDistricts: [
                        { value: 'shariatpur_sadar', label: 'Shariatpur Sadar' },
                        { value: 'alfadanga', label: 'Alfadanga' },
                        { value: 'naria', label: 'Naria' },
                        { value: 'zanjira', label: 'Zanjira' },
                    ]
                }
            ]
        },
        {
            value: 'chittagong',
            label: 'Chittagong',
            districts: [
                {
                    value: 'chittagong_district',
                    label: 'Chittagong',
                    subDistricts: [
                        { value: 'bayazid', label: 'Bayazid' },
                        { value: 'agrabad', label: 'Agrabad' },
                        { value: 'patenga', label: 'Patenga' },
                        { value: 'kotwali', label: 'Kotwali' },
                        { value: 'halishahar', label: 'Halishahar' },
                    ]
                },
                {
                    value: 'cox_bazar',
                    label: 'Cox\'s Bazar',
                    subDistricts: [
                        { value: 'cox_bazar_sadar', label: 'Cox\'s Bazar Sadar' },
                        { value: 'teknaf', label: 'Teknaf' },
                        { value: 'ukhia', label: 'Ukhia' },
                        { value: 'chakaria', label: 'Chakaria' },
                        { value: 'ramu', label: 'Ramu' },
                    ]
                },
                {
                    value: 'rangamati',
                    label: 'Rangamati',
                    subDistricts: [
                        { value: 'rangamati_sadar', label: 'Rangamati Sadar' },
                        { value: 'kaptai', label: 'Kaptai' },
                        { value: 'baghaichhari', label: 'Baghaichhari' },
                        { value: 'kawkhali', label: 'Kawkhali' },
                    ]
                },
                {
                    value: 'khagrachari',
                    label: 'Khagrachari',
                    subDistricts: [
                        { value: 'khagrachari_sadar', label: 'Khagrachari Sadar' },
                        { value: 'lakshmichhari', label: 'Lakshmichhari' },
                        { value: 'ramgarh', label: 'Ramgarh' },
                        { value: 'matiranga', label: 'Matiranga' },
                    ]
                },
                {
                    value: 'feni',
                    label: 'Feni',
                    subDistricts: [
                        { value: 'feni_sadar', label: 'Feni Sadar' },
                        { value: 'chhagalnaiya', label: 'Chhagalnaiya' },
                        { value: 'parshuram', label: 'Parshuram' },
                        { value: 'sommannapur', label: 'Sommannapur' },
                    ]
                },
                {
                    value: 'noakhali',
                    label: 'Noakhali',
                    subDistricts: [
                        { value: 'noakhali_sadar', label: 'Noakhali Sadar' },
                        { value: 'begumganj', label: 'Begumganj' },
                        { value: 'chatkhil', label: 'Chatkhil' },
                        { value: 'sudharam', label: 'Sudharam' },
                    ]
                },
                {
                    value: 'comilla',
                    label: 'Comilla',
                    subDistricts: [
                        { value: 'comilla_sadar', label: 'Comilla Sadar' },
                        { value: 'barura', label: 'Barura' },
                        { value: 'chandpur', label: 'Chandpur' },
                        { value: 'laksam', label: 'Laksam' },
                        { value: 'homna', label: 'Homna' },
                    ]
                },
                {
                    value: 'chandpur',
                    label: 'Chandpur',
                    subDistricts: [
                        { value: 'chandpur_sadar', label: 'Chandpur Sadar' },
                        { value: 'anwara', label: 'Anwara' },
                        { value: 'haimchar', label: 'Haimchar' },
                        { value: 'lohagara', label: 'Lohagara' },
                    ]
                }
            ]
        },
        {
            value: 'khulna',
            label: 'Khulna',
            districts: [
                {
                    value: 'khulna_district',
                    label: 'Khulna',
                    subDistricts: [
                        { value: 'khulna_sadar', label: 'Khulna Sadar' },
                        { value: 'batiaghata', label: 'Batiaghata' },
                        { value: 'dakop', label: 'Dakop' },
                        { value: 'dumuria', label: 'Dumuria' },
                        { value: 'koyra', label: 'Koyra' },
                    ]
                },
                {
                    value: 'bagerhat',
                    label: 'Bagerhat',
                    subDistricts: [
                        { value: 'bagerhat_sadar', label: 'Bagerhat Sadar' },
                        { value: 'kachua', label: 'Kachua' },
                        { value: 'mongla', label: 'Mongla' },
                        { value: 'morrelganj', label: 'Morrelganj' },
                    ]
                },
                {
                    value: 'satkhira',
                    label: 'Satkhira',
                    subDistricts: [
                        { value: 'satkhira_sadar', label: 'Satkhira Sadar' },
                        { value: 'assasuni', label: 'Assasuni' },
                        { value: 'kolaroa', label: 'Kolaroa' },
                        { value: 'shyamnagar', label: 'Shyamnagar' },
                    ]
                },
                {
                    value: 'jessore',
                    label: 'Jessore',
                    subDistricts: [
                        { value: 'jessore_sadar', label: 'Jessore Sadar' },
                        { value: 'abhaynagar', label: 'Abhaynagar' },
                        { value: 'manirampur', label: 'Manirampur' },
                        { value: 'sharsha', label: 'Sharsha' },
                    ]
                },
                {
                    value: 'magura',
                    label: 'Magura',
                    subDistricts: [
                        { value: 'magura_sadar', label: 'Magura Sadar' },
                        { value: 'alikadam', label: 'Alikadam' },
                        { value: 'shalikha', label: 'Shalikha' },
                    ]
                },
                {
                    value: 'narail',
                    label: 'Narail',
                    subDistricts: [
                        { value: 'narail_sadar', label: 'Narail Sadar' },
                        { value: 'lohagara', label: 'Lohagara' },
                        { value: 'sadarpur', label: 'Sadarpur' },
                    ]
                }
            ]
        },
        {
            value: 'sylhet',
            label: 'Sylhet',
            districts: [
                {
                    value: 'sylhet_district',
                    label: 'Sylhet',
                    subDistricts: [
                        { value: 'sylhet_sadar', label: 'Sylhet Sadar' },
                        { value: 'bishwanath', label: 'Bishwanath' },
                        { value: 'golapganj', label: 'Golapganj' },
                        { value: 'balaganj', label: 'Balaganj' },
                        { value: 'fenchuganj', label: 'Fenchuganj' },
                    ]
                },
                {
                    value: 'moulvibazar',
                    label: 'Moulvibazar',
                    subDistricts: [
                        { value: 'moulvibazar_sadar', label: 'Moulvibazar Sadar' },
                        { value: 'barlekha', label: 'Barlekha' },
                        { value: 'kamalganj', label: 'Kamalganj' },
                        { value: 'kulaura', label: 'Kulaura' },
                        { value: 'sreemangal', label: 'Sreemangal' },
                    ]
                },
                {
                    value: 'habiganj',
                    label: 'Habiganj',
                    subDistricts: [
                        { value: 'habiganj_sadar', label: 'Habiganj Sadar' },
                        { value: 'ajmiriganj', label: 'Ajmiriganj' },
                        { value: 'bahubal', label: 'Bahubal' },
                        { value: 'madhabpur', label: 'Madhabpur' },
                    ]
                },
                {
                    value: 'sunamganj',
                    label: 'Sunamganj',
                    subDistricts: [
                        { value: 'sunamganj_sadar', label: 'Sunamganj Sadar' },
                        { value: 'jagannathpur', label: 'Jagannathpur' },
                        { value: 'tahirpur', label: 'Tahirpur' },
                        { value: 'dowarabazar', label: 'Dowarabazar' },
                    ]
                }
            ]
        },
        {
            value: 'barishal',
            label: 'Barishal',
            districts: [
                {
                    value: 'barishal_district',
                    label: 'Barishal',
                    subDistricts: [
                        { value: 'barishal_sadar', label: 'Barishal Sadar' },
                        { value: 'bakerganj', label: 'Bakerganj' },
                        { value: 'gournadi', label: 'Gournadi' },
                        { value: 'mehendiganj', label: 'Mehendiganj' },
                    ]
                },
                {
                    value: 'bhola',
                    label: 'Bhola',
                    subDistricts: [
                        { value: 'bhola_sadar', label: 'Bhola Sadar' },
                        { value: 'borhanuddin', label: 'Borhanuddin' },
                        { value: 'charfasion', label: 'Charfasion' },
                        { value: 'daulkhand', label: 'Daulkhand' },
                    ]
                },
                {
                    value: 'jhalokati',
                    label: 'Jhalokati',
                    subDistricts: [
                        { value: 'jhalokati_sadar', label: 'Jhalokati Sadar' },
                        { value: 'kathalia', label: 'Kathalia' },
                        { value: 'rajapur', label: 'Rajapur' },
                    ]
                },
                {
                    value: 'jhalokhar',
                    label: 'Jhalokhar',
                    subDistricts: [
                        { value: 'jhalokhar_sadar', label: 'Jhalokhar Sadar' },
                        { value: 'nalchity', label: 'Nalchity' },
                        { value: 'nayajangal', label: 'Nayajangal' },
                    ]
                },
                {
                    value: 'pirojpur',
                    label: 'Pirojpur',
                    subDistricts: [
                        { value: 'pirojpur_sadar', label: 'Pirojpur Sadar' },
                        { value: 'bhandaria', label: 'Bhandaria' },
                        { value: 'kawkhali', label: 'Kawkhali' },
                    ]
                }
            ]
        },
        {
            value: 'rajshahi',
            label: 'Rajshahi',
            districts: [
                {
                    value: 'rajshahi_district',
                    label: 'Rajshahi',
                    subDistricts: [
                        { value: 'rajshahi_sadar', label: 'Rajshahi Sadar' },
                        { value: 'baghmara', label: 'Baghmara' },
                        { value: 'charghat', label: 'Charghat' },
                        { value: 'durgapura', label: 'Durgapura' },
                        { value: 'puthia', label: 'Puthia' },
                    ]
                },
                {
                    value: 'bogra',
                    label: 'Bogra',
                    subDistricts: [
                        { value: 'bogra_sadar', label: 'Bogra Sadar' },
                        { value: 'adamdighi', label: 'Adamdighi' },
                        { value: 'dhunat', label: 'Dhunat' },
                        { value: 'gabtali', label: 'Gabtali' },
                        { value: 'sherpur', label: 'Sherpur' },
                    ]
                },
                {
                    value: 'joypurhat',
                    label: 'Joypurhat',
                    subDistricts: [
                        { value: 'joypurhat_sadar', label: 'Joypurhat Sadar' },
                        { value: 'akkelpur', label: 'Akkelpur' },
                        { value: 'kalijanpur', label: 'Kalijanpur' },
                        { value: 'panchbibi', label: 'Panchbibi' },
                    ]
                },
                {
                    value: 'naogaon',
                    label: 'Naogaon',
                    subDistricts: [
                        { value: 'naogaon_sadar', label: 'Naogaon Sadar' },
                        { value: 'atrai', label: 'Atrai' },
                        { value: 'manda', label: 'Manda' },
                        { value: 'patnitala', label: 'Patnitala' },
                    ]
                },
                {
                    value: 'natore',
                    label: 'Natore',
                    subDistricts: [
                        { value: 'natore_sadar', label: 'Natore Sadar' },
                        { value: 'bagatipara', label: 'Bagatipara' },
                        { value: 'gurudaspur', label: 'Gurudaspur' },
                        { value: 'singra', label: 'Singra' },
                    ]
                },
                {
                    value: 'nawabganj',
                    label: 'Nawabganj',
                    subDistricts: [
                        { value: 'nawabganj_sadar', label: 'Nawabganj Sadar' },
                        { value: 'aharagram', label: 'Aharagram' },
                        { value: 'bheramara', label: 'Bheramara' },
                        { value: 'khanjanpur', label: 'Khanjanpur' },
                    ]
                }
            ]
        },
        {
            value: 'rangpur',
            label: 'Rangpur',
            districts: [
                {
                    value: 'rangpur_district',
                    label: 'Rangpur',
                    subDistricts: [
                        { value: 'rangpur_sadar', label: 'Rangpur Sadar' },
                        { value: 'badarganj', label: 'Badarganj' },
                        { value: 'gangachhara', label: 'Gangachhara' },
                        { value: 'mithapukur', label: 'Mithapukur' },
                        { value: 'pirganj', label: 'Pirganj' },
                    ]
                },
                {
                    value: 'dinajpur',
                    label: 'Dinajpur',
                    subDistricts: [
                        { value: 'dinajpur_sadar', label: 'Dinajpur Sadar' },
                        { value: 'birganj', label: 'Birganj' },
                        { value: 'bochaganj', label: 'Bochaganj' },
                        { value: 'khansama', label: 'Khansama' },
                        { value: 'parbatipur', label: 'Parbatipur' },
                    ]
                },
                {
                    value: 'gaibandha',
                    label: 'Gaibandha',
                    subDistricts: [
                        { value: 'gaibandha_sadar', label: 'Gaibandha Sadar' },
                        { value: 'fulchhari', label: 'Fulchhari' },
                        { value: 'palashbari', label: 'Palashbari' },
                        { value: 'saghata', label: 'Saghata' },
                    ]
                },
                {
                    value: 'lalmonirhat',
                    label: 'Lalmonirhat',
                    subDistricts: [
                        { value: 'lalmonirhat_sadar', label: 'Lalmonirhat Sadar' },
                        { value: 'hatibandha', label: 'Hatibandha' },
                        { value: 'kamanrganj', label: 'Kamanrganj' },
                        { value: 'patgram', label: 'Patgram' },
                    ]
                },
                {
                    value: 'kurigram',
                    label: 'Kurigram',
                    subDistricts: [
                        { value: 'kurigram_sadar', label: 'Kurigram Sadar' },
                        { value: 'bhurungamari', label: 'Bhurungamari' },
                        { value: 'charrajibpur', label: 'Charrajibpur' },
                        { value: 'nageshwari', label: 'Nageshwari' },
                        { value: 'rawanpur', label: 'Rawanpur' },
                    ]
                },
                {
                    value: 'thakurgaon',
                    label: 'Thakurgaon',
                    subDistricts: [
                        { value: 'thakurgaon_sadar', label: 'Thakurgaon Sadar' },
                        { value: 'baliadangi', label: 'Baliadangi' },
                        { value: 'pirganj', label: 'Pirganj' },
                        { value: 'ranisankail', label: 'Ranisankail' },
                    ]
                }
            ]
        },
        {
            value: 'mymensingh',
            label: 'Mymensingh',
            districts: [
                {
                    value: 'mymensingh_district',
                    label: 'Mymensingh',
                    subDistricts: [
                        { value: 'mymensingh_sadar', label: 'Mymensingh Sadar' },
                        { value: 'ananda_bazar', label: 'Ananda Bazar' },
                        { value: 'bhaluka', label: 'Bhaluka' },
                        { value: 'dhobaura', label: 'Dhobaura' },
                        { value: 'fulbaria', label: 'Fulbaria' },
                        { value: 'gouripur', label: 'Gouripur' },
                        { value: 'haluaghat', label: 'Haluaghat' },
                        { value: 'muktagacha', label: 'Muktagacha' },
                    ]
                },
                {
                    value: 'jamalpur',
                    label: 'Jamalpur',
                    subDistricts: [
                        { value: 'jamalpur_sadar', label: 'Jamalpur Sadar' },
                        { value: 'dewanganj', label: 'Dewanganj' },
                        { value: 'islampur', label: 'Islampur' },
                        { value: 'madarganj', label: 'Madarganj' },
                        { value: 'sarishabari', label: 'Sarishabari' },
                    ]
                },
                {
                    value: 'sherpur',
                    label: 'Sherpur',
                    subDistricts: [
                        { value: 'sherpur_sadar', label: 'Sherpur Sadar' },
                        { value: 'dhupchanchia', label: 'Dhupchanchia' },
                        { value: 'nakshal', label: 'Nakshal' },
                        { value: 'panchgaon', label: 'Panchgaon' },
                    ]
                },
                {
                    value: 'netrokona',
                    label: 'Netrokona',
                    subDistricts: [
                        { value: 'netrokona_sadar', label: 'Netrokona Sadar' },
                        { value: 'atpara', label: 'Atpara' },
                        { value: 'barhatta', label: 'Barhatta' },
                        { value: 'durgapur', label: 'Durgapur' },
                        { value: 'khaliajuri', label: 'Khaliajuri' },
                    ]
                }
            ]
        }
    ];

// Get divisions for the division dropdown
    const getDivisions = () => {
        return bangladeshLocations.map(div => ({
            value: div.value,
            label: div.label
        }));
    };

// Get districts based on selected division
    const getDistricts = (divisionValue) => {
        const division = bangladeshLocations.find(div => div.value === divisionValue);
        return division ? division.districts.map(dist => ({
            value: dist.value,
            label: dist.label
        })) : [];
    };

// Get sub-districts based on selected district
    const getSubDistricts = (divisionValue, districtValue) => {
        const division = bangladeshLocations.find(div => div.value === divisionValue);
        if (!division) return [];

        const district = division.districts.find(dist => dist.value === districtValue);
        return district ? district.subDistricts.map(subDist => ({
            value: subDist.value,
            label: subDist.label
        })) : [];
    };

// Updated handler functions
    const handleDivisionChange = (selectedOption) => {
        setSelectedDivision(selectedOption);

        // Reset district and sub-district when division changes
        setSelectedDistrict(null);
        setSelectedSubDistrict(null);

    };

    const handleDistrictChange = (selectedOption) => {
        setSelectedDistrict(selectedOption);

        // Reset sub-district when district changes
        setSelectedSubDistrict(null);
    };

    const handleSubDistrictChange = (selectedOption) => {
        setSelectedSubDistrict(selectedOption);
    };


    // Parallax effect using GSAP
    useEffect(() => {
        if (!isLargeDevice) return;

        // Create parallax animation for big image only
        if (bigImgRef.current) {
            gsap.fromTo(bigImgRef.current,
                {
                    yPercent: -20
                },
                {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: bigImgRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                        refreshPriority: -1
                    }
                }
            );
        }

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isLargeDevice]);


    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPartnership, setSelectedPartnership] = useState(null);
    const [selectedDivision, setSelectedDivision] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedSubDistrict, setSelectedSubDistrict] = useState(null);


    const handlePartnershipChange = (selectedOption) => {
        setSelectedPartnership(selectedOption);
    };

    //--- form submit
    const success = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    const error = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    const onSubmit = async (e) => {
        try {
            const formData = new FormData();
            formData.append('name', e?.name);
            formData.append('business_name', e?.business_name);
            formData.append('email', e?.email);
            formData.append('phone', e?.phone);
            formData.append('partnership_category', selectedPartnership?.label);
            formData.append('division', selectedDivision?.label);
            formData.append('district', selectedDistrict?.label);
            formData.append('sub_district', selectedSubDistrict?.label);
            formData.append('business_address', e?.business_address);
            formData.append('experience', e?.experience);
            formData.append('message', e?.message);
            formData.append('form_id', 'partnership-form');

            const response = await axios.post('https://bestinbd.com/2510GES/api/post-req-data/form-submit', formData);
            if (response.status === 200) {
                success(response?.data?.message);
                reset(); // Reset form fields
            } else {
                error('Failed to submit form. Please try again later.');
            }
        } catch (err) {
            error('Failed to submit form. Please try again later.');
        }
    };
    const onError = (errors) => {
        // setToastShown(false); // Reset toast shown state on new submission attempt
        const firstError = Object.values(errors)[0];
        error(firstError.message);
    };


    const partnership_category = [
        {value: 'A', label: 'A'},
        {value: 'B', label: 'B'},
        {value: 'C', label: 'C'},
    ]


    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <CaretDownIcon/>
            </components.DropdownIndicator>
        );
    };

    const customStyles = {
        dropdownIndicator: (base, state) => ({
            ...base,
            transition: "all .2s ease",
            transform: state.selectProps.menuIsOpen && "rotate(180deg)"
        }),
        option: (provided, state) => ({
            ...provided,
            borderRadius: 0,
            color: state.isSelected ? `${Black}` : '#221F1F',
            backgroundColor: state.isSelected ? `rgba(232, 231, 231, 0.6)` : '#FFF',
            margin: 0,
            fontSize: 14,
            cursor: 'pointer',
            paddingLeft: 10,
            paddingRight: 10,
            fontWeight: state.isSelected ? 700 : 400,
            "&:hover": {
                backgroundColor: `#7A9972`,
                color: '#FFF',
                cursor: 'pointer'
            },

        }), menu: (provided, state) => ({
            ...provided,
            color: '#FFF',
            backgroundColor: state.isSelected ? `${Black}` : 'rgba(255,255,255,0)',
            margin: 0,
            borderRadius: 5,
            fontSize: 14,
            // fontFamily:`${grotesk}`,
            zIndex:99999999
            // width: 200,
        }), menuList: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#191818' : '#FFF',
            borderRadius: 0,
            fontWeight: '400',
            color: '#FFF',
            fontSize: 14,
        }),

    };

    const CaretDownIcon = () => {
        return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.0694 5.15735L8.38444 9.76835C8.28221 9.86948 8.14423 9.9262 8.00044 9.9262C7.85664 9.9262 7.71866 9.86948 7.61644 9.76835L2.93144 5.15835C2.82858 5.05728 2.69014 5.00064 2.54594 5.00064C2.40173 5.00064 2.26329 5.05728 2.16044 5.15835C2.10979 5.20773 2.06954 5.26675 2.04205 5.33192C2.01457 5.3971 2.00041 5.46712 2.00041 5.53785C2.00041 5.60859 2.01457 5.67861 2.04205 5.74378C2.06954 5.80896 2.10979 5.86798 2.16044 5.91735L6.84444 10.5274C7.15296 10.8303 7.56806 11 8.00044 11C8.43281 11 8.84791 10.8303 9.15644 10.5274L13.8404 5.91735C13.8912 5.86796 13.9316 5.80888 13.9592 5.74362C13.9868 5.67835 14.001 5.60821 14.001 5.53735C14.001 5.4665 13.9868 5.39636 13.9592 5.33109C13.9316 5.26583 13.8912 5.20675 13.8404 5.15735C13.7376 5.05628 13.5991 4.99964 13.4549 4.99964C13.3107 4.99964 13.1723 5.05628 13.0694 5.15735Z" fill="#7E7E7E" fill-opacity="0.74"/>
        </svg> ;
    };

    return (
        <StyledComponent className={'contact-form pb-120 pt-160'}>
            <Container>
                <Form className={'form'} >
                    <Row className={'rows'}>
                        <Col lg={{span:5}} className='contact-left'>
                            <h3>Partner with Bangladesh’s leading clean-energy ecosystem</h3>
                            <p>With international sourcing hubs and logistics operations spanning Bangladesh and Canada, we ensure timely procurement of solar modules, HVAC systems, batteries, and EV infrastructure.</p>
                        </Col>
                        <Col lg={{span: 6, offset: 1}} className='modal-data__content mobile-version'>
                            <div className={'d-flex justify-content-between form__phoneEmail'}>
                                <Form.Group className="from-group">
                                    <Form.Control
                                        className={errors?.name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Enter your name'
                                            },
                                            pattern: {
                                                value: /^[A-Za-z ]+$/,
                                                message: 'Name must contain only letters',
                                            },
                                        })}
                                        type="text" placeholder="Full Name*"/>
                                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                                </Form.Group>
                                <Form.Group className="from-group">
                                    <Form.Control
                                        className={errors?.business_name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                        {...register("business_name", {})}
                                        type="text" placeholder="Business Name*"/>
                                    {errors.business_name &&
                                        <span className="error-message">{errors.business_name.message}</span>}
                                </Form.Group>
                            </div>
                            <div className={'d-flex justify-content-between form__phoneEmail'}>
                                <Form.Group className="from-group">
                                    <Form.Control
                                        className={errors?.email?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Enter your email'
                                            },
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Enter a valid email address'
                                            }
                                        })}
                                        type="email" placeholder="Email Address*"/>
                                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                                </Form.Group>

                                <Form.Group className="from-group">
                                    <Form.Control
                                        className={errors?.phone?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'Enter your phone number'
                                            },
                                            pattern: {
                                                value: /^[0-9]*$/,
                                                message: 'Enter a valid phone number',
                                            }
                                        })}
                                        type="number" placeholder="Phone Number*"/>
                                    {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                                </Form.Group>
                            </div>
                            <div className={'d-flex justify-content-between form__phoneEmail'}>
                                <Controller
                                    control={control}
                                    name="partnership_category"
                                    defaultValue={null}
                                    render={({field}) => (
                                        <Select
                                            {...field}
                                            isSearchable={false}
                                            classNamePrefix="filter"
                                            options={partnership_category}
                                            components={{DropdownIndicator}}
                                            placeholder="Partnership Category"
                                            styles={customStyles}
                                            onChange={handlePartnershipChange}
                                            value={selectedPartnership}
                                            isClearable={true}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="division"
                                    defaultValue={null}
                                    render={({field}) => (
                                        <Select
                                            {...field}
                                            isSearchable={false}
                                            classNamePrefix="filter"
                                            options={getDivisions()}
                                            components={{DropdownIndicator}}
                                            placeholder="Division"
                                            styles={customStyles}
                                            onChange={handleDivisionChange}
                                            value={selectedDivision}
                                            isClearable={true}
                                        />
                                    )}
                                />
                            </div>
                            <div className={'d-flex justify-content-between form__phoneEmail'}>
                                <Controller
                                    control={control}
                                    name="district"
                                    defaultValue={null}
                                    render={({field}) => (
                                        <Select
                                            {...field}
                                            isSearchable={false}
                                            classNamePrefix="filter"
                                            options={getDistricts(selectedDivision?.value)}
                                            components={{DropdownIndicator}}
                                            placeholder="District"
                                            styles={customStyles}
                                            onChange={handleDistrictChange}
                                            value={selectedDistrict}
                                            isClearable={true}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="sub_district"
                                    defaultValue={null}
                                    render={({field}) => (
                                        <Select
                                            {...field}
                                            isSearchable={false}
                                            classNamePrefix="filter"
                                            options={getSubDistricts(selectedDivision?.value, selectedDistrict?.value)}
                                            components={{DropdownIndicator}}
                                            placeholder="Sub-District"
                                            styles={customStyles}
                                            onChange={handleSubDistrictChange}
                                            value={selectedSubDistrict}
                                            isClearable={true}
                                        />
                                    )}
                                />
                            </div>
                            <div className={'d-flex justify-content-between form__phoneEmail'}>
                                <Form.Group className="from-group">
                                    <Form.Control
                                        className={errors?.business_address?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                        {...register("business_address" )}
                                        type="text" placeholder="Business Address"/>
                                    {errors.business_address && <span className="error-message">{errors.business_address.message}</span>}
                                </Form.Group>
                                <Form.Group className="from-group">
                                    <Form.Control
                                        className={errors?.experience?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                        {...register("experience", {
                                            required: {
                                                value: false,
                                            }
                                        })}
                                        type="number" placeholder="Years of Experience"/>
                                    {errors.experience &&
                                        <span className="error-message">{errors.experience.message}</span>}
                                </Form.Group>
                            </div>
                            <Form.Group className={'form-group'}>
                                <textarea  {...register('message', {
                                    required: {
                                        value: false,
                                        message: "Please enter a valid message"
                                    },
                                })} type="text" placeholder="Additional Notes"/>
                            </Form.Group>
                            <Row>
                                <Col md={12}>
                                    <div className="button-group" onClick={handleSubmit(onSubmit, onError)}>
                                        <MainButton
                                            text={'Submit Message'}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>

            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    background-color: ${White};
    margin-top: -5px;
    position: relative;
    overflow: hidden;


    .contact-left {

        .contact-info {
            &:first-child {
                margin-bottom: 30px;
            }
        }


        h3 {
            margin-bottom: 20px;
            color: #000;
            font-size: 56px;
            font-style: normal;
            font-weight: 500;
            line-height: 135%; /* 75.6px */
        }

        p {
            padding-bottom: 24px;
            margin-bottom: 24px;
            color: #000;
            /* Medium/bodyM */
            font-family: "Inter";
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 27px */
        }

        h6, a {
            color: #000;

            /* Medium/label */
            font-family: "Inter";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 16.8px */
        }

    }

    .title {
        margin-bottom: 50px;
        @media (max-width: 767px) {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }
    }

    p {
        color: #162213;

        /* Body */
        font-family: "Roboto Slab";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 21.6px */
        letter-spacing: -0.36px;
        margin-bottom: 45px;
    }

    @media (max-width: 767px) {
        background: ${White};
    }

    .from-group {
        margin-bottom: 24px;
    }

    .form-control {
        background-color: #EFF1ED;
        border: 1px solid rgba(46, 96, 49, 0.25) !important;
        border-radius: 15px;
        margin-bottom: 0px;
        color: ${Black} !important;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 16px !important;;
        font-style: normal;
        font-weight: 500 !important;;
        line-height: 120% !important;; /* 21.6px */
        height: 48px;

        &:focus {
            border: 1px solid rgba(46, 96, 49, 0.25) !important;

        }

        &::placeholder {
            color: #000 !important;
            font-family: "Inter";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 16.8px */
        }

        @media (max-width: 767px) {
            margin-bottom: 25px;
            padding-bottom: 0px;
            &::placeholder {
                color: #000 !important;
                font-family: "Inter";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 120%; /* 16.8px */
            }
        }
    }

    .form__phoneEmail {
        display: flex;
        gap: 20px;
        @media (max-width: 767px) {
            flex-direction: column;
            input {
                width: 100% !important;
            }
        }

        input {
            width: 49%;
        }
    }

    input[type="textarea"] {
        padding-bottom: 80px;

        &::placeholder {
            color: #000 !important;
            font-family: "Inter";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 16.8px */
        }
    }

    textarea {
        &::placeholder {
            color: #000 !important;
            font-family: "Inter";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 16.8px */
        }
    }

    .button-group {
        width: fit-content;
        padding-top: 20px;
    }

    @media (max-width: 767px) {
        .button-group {
            display: flex;
            justify-content: center;
        }
    }

    .error-message {
        color: red;
        font-size: 14px;
    }

    .css-t3ipsp-control {
        background: transparent;
        box-shadow: 0px 0px transparent;
        border-color: transparent;
        border-bottom: 1px solid #FFFFFF !important;
        border-radius: 0 !important;
        padding-left: 0px;
        padding-right: 10px;

        width: 49%;
        display: flex;
        justify-content: space-between;

        &:hover {
            border: transparent;
        }
    }

    .css-1u9des2-indicatorSeparator {
        background-color: transparent !important;
    }

    .form .filter__control {
        //margin-top: 50px !important;
    }

    .css-13cymwt-control {
        border-color: #FFFFFF !important;
        border: 1px solid rgba(46,96,49,0.25)!important;
        height: 48px;
        border-radius: 15px;
        width: 96%;
    }

    .form {
        .rows {
            @media (max-width: 767px) {
                //flex-direction: column-reverse;
            }
        }

        .form-group {
            background: transparent;
        }

        .modal-data__content {
            position: relative;


            .form__phoneEmail {
                display: flex;
                justify-content: space-between;
                
                .css-b62m3t-container{
                    &:first-child{
                        //justify-content: start;
                    }
                }

                .from-group {
                    width: 48% !important;
                }

                input {
                    width: 100% !important;
                }

                @media (max-width: 767px) {
                    display: block !important;
                    .form-group {
                        width: 100% !important;

                    }
                }
            }

            .row {
                .right {
                    position: absolute;
                    //bottom: -120px;
                    //right: 0;

                    bottom: -230px;
                    right: -54px;
                    @media (max-width: 767px) {
                        bottom: -80px;
                        right: 0;
                    }
                }

                @media (max-width: 767px) {
                    flex-direction: column-reverse;
                }
            }

            &__right-img {
                position: relative;
                padding-top: calc(386 / 400 * 100%);
                @media (max-width: 767px) {
                    padding-top: calc(172 / 273 * 100%);
                }
            }

            &__img {
                position: relative;
                padding-top: calc(319 / 400 * 100%);
                overflow: hidden; /* Add overflow hidden for parallax effect */

                @media (max-width: 767px) {
                    padding-top: calc(306 / 341 * 100%);
                }
            }

            h2 {
                color: ${Black};
                font-size: 34px;
                font-weight: 500;
                line-height: 109%; /* 37.06px */
                letter-spacing: -1.02px;
                margin-bottom: 40px;


            }

            @media (max-width: 767px) {
                h2 {
                    margin-bottom: 24px;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 109%; /* 21.8px */
                    letter-spacing: -0.6px;
                }

                &.mobile-version {
                    //margin-top: 60px;
                    margin-bottom: 40px;
                }
            }

        }
    }

    input:-webkit-autofill {
        -webkit-text-fill-color: ${Black};

        &:focus {
            border: 1px solid rgba(46, 96, 49, 0.25) !important;

        }

        &:hover {
            border: 1px solid rgba(46, 96, 49, 0.25) !important;

        }
    }

    textarea {

        background: #fff !important;
        border: 1px solid rgba(46, 96, 49, 0.25) !important;
        border-radius: 15px;  
        padding-bottom: 10px;
        width: 100%;
        color: ${Black} !important;
        padding-left: 15px;
        padding-top: 15px;
        min-height: 48px;

        &::placeholder {
            color: #000 !important;
            font-family: "Inter";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 16.8px */
        }
        &:focus-visible {
            color: #000 !important;
            border-bottom: 1px solid #271A00;
        }
    }


    .css-mnviuz-indicatorContainer {
        padding: 0px !important;
    }

    @media (max-width: 767px) {
        .contact-left {
            h3{
                font-size: 32px !important;
            }          
            margin-bottom: 60px;

            .contact-info{
                &:first-child{
                    margin-top: 30px;
                }
            }
        }

        .form .modal-data__content .form__phoneEmail .from-group {
            width: 100% !important;
        }

        .form__phoneEmail {
            .from-group {
                margin-bottom: 0;
            }
        }

        textarea {
            background: transparent;
        }

    }


    @media (min-width: 768px) and (max-width: 991px) {
        .col-lg-6 {
            margin-top: 200px;
        }
    }
    
    .css-b62m3t-container{
        width: 100%;
        display: flex;
        justify-content: start;

        height: 48px;
        display: flex;
        //justify-content: center;
        align-items: center;
        margin-bottom: 24px;
        //border: 1px solid rgba(46, 96, 49, 0.25) !important;
        border-radius: 15px;

        //margin-bottom: 24px;
        //border-radius: 15px;
        //border: 1px solid red;
        //display: flex;
        ////justify-content: center;
        //align-items: center;
    }
       
    .css-1jqq78o-placeholder{
        color: #000;
        font-family: "Inter";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 16.8px */
    }
    
    .filter__control--is-focused{
        //width: 100%;
        //border: 1px solid rgba(46, 96, 49, 0.25) !important;
        border: 1px solid rgba(46,96,49,0.25)!important;
        height: 48px;
        border-radius: 15px !important;
        width: 96%;

    }

    .css-1dimb5e-singleValue{
        font-style: normal;
        font-size: 16px !important;
        font-weight: 500 !important;
        line-height: 120% !important; /* 21.6px */
    }

    
   
`;

export default React.memo(MyComponent);