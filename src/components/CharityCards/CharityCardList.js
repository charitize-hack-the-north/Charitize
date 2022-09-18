import { ReactElement, useEffect, useState } from "react"

import CharityCard from "./CharityCard"
import { SponsorPage } from "../../pages/SponsorPage";

const CharityList = () => {
    const [salArmy, setSalArmy] = useState();
    return ( salArmy ? (
        <SponsorPage />  
    )
        :
    (
        <div className="flex flex-col items-center w-full h-full space-y-6 overflow-auto">
            <form className="mt-12">   
                <label for="default-search" class="text-sm font-medium text-gray-900 sr-only">Search</label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class=" shadow-lg block p-6 pl-10 w-[700px] text-sm text-gray-900 bg-gray-50 rounded-full focus:ring-blue-500 focus:border-blue-500" placeholder="Search for Charities" required />
                    <button type="submit" class="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <div className="h-20"></div>
                <div className="flex flex-row w-full justify-center space-x-8">
                    <CharityCard name="Canadian Cancer Society" photo="data:image/png;base64,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" />
                    <CharityCard name="Heart and Stroke Foundation" photo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAe1BMVEXdIhH////fLBzhPS7++/reJRXeKRj+9/f529jsg3r98fDgNib86un75ePhOyzfMiLpbWLiQzTkUkTqdmz3yMT4zsvtiYDjSjzlVknxpp/vl4/51dLwm5TujYXrfnTzr6nnY1f1wLv0uLL3ysbmX1LqeW72wb3yqKL4089X9arlAAAEKElEQVR4nO2b61biMBSF29pyKTggIIiCCt54/ycc5OLQNDvJoSdds5b782/SbEJyLruYJIQQQgghhBBCCCGEEEIIIYQQQgghhJBfRpFl2SjrFJ5Rnewbz6g2yOa7Mj2Tl7N+ZhtVjLfD/GdYt7catK3zgmkvrdHrm6Ne7/PaqOFauOPZjR3pF/dc1iUfdnLZuRjVH9pH5SvRerf2p6R/RJIXQMxB9vo8agw+2GHUOHy1Z/CMW5HmFRZzeNjd96Ds3j3qs+Nb5kTRBU+YCCQXHjV75knyjpb6YRh4I1/A/JlAc4ZO2CXbdcCg7l3Iejdgdj4K11yEaA6kG3KTnsDkVbjmZKenOU1L/7l+RVMFmh81NafpvXdBFIEE0edOV3OaTq/cpF645sSSBZvRdWeZrJ5PjwTd4SNjbc1punQuuAGztuGaYT5tQO7a6gWaFJqY9jzoa07Txys2aR6uOfGnwitwxK4pmDIUaC7QrWjGAq6HKoEHgeiPKJrTF7TeEkzwB/cL3uKIRl/2AIzPRa2PozxuBIgf6Aa5g6RBEUkzyMgoVHnSkcEolmj71qHmyJf4q6jXHWes1fwcDJYUHQlOT42x6eig8AoDpJ1JLNG2BnULxm5kmuMk8W8sMQ8dxdzqB/0nolEJ7CpUrLR4PFAJLOmxjrR4EVEaexWLRr18Y2qXC5lBT2LNSRZLtHlQRyjcyby7I7FEm5XmDIyD5aALh+vYCGMZdOFlRceZzziazYiHeqznazRDs6chX9VVdIzdf8Rpt6oWhoqxewm6IY0wToeGsVuhBQtBw9g1iBA/DN9Fw9g1QJekAVWDS8PYraHf2w6Cni8wduuob3V1ozWMXQvKp7pa1GsYuzbedUVXQ8cGjJIYu1ZUY3U1RmsYu3Yy7/tBAdUsp2HsAhTfBlRdGg1jF7LR0lwtgVSMXUihFEEM91PF2MXc6FR71YShY+w6UDnWRjWhYuw6CXld78EoNXWMXTfIagumZ4jRMXY9NHyVMTTyhZKx66PRC+fSKOm1jF0fRQPVXbMN0TJ2I6ouTadIzdiNp9o8G4rGbghX3cZhbfv0jN0groh8vXqdqWfshiH+ddBn/RnI2N1F0ryvJ2V1iCUpqxq7gSwETUFua6pVjd1QsuAgUtr6U11jNxxkvxk8WVs9XWNXwDjkYNuDrraxK2Dg/UVWaXdq1Y1dEahZOvEGXAB1Y1fGxGHz5agqjmDsyihgetxBCRGMXSkP1s3ufsAJUYxdMZaMvHF4WlGMXTl/jC986HJaXMZu/6W/niTjluS/X7So3dq/vVziNnb7yXSePKr2tS76p9ibL92ZeAM0H43dvejnxbQ10Umy3h/W/Mtj0HqM3b3owWzQouh9e+3v7o7/glbn9FmL0x8hhBBCCCGEEEIIIYQQQgghhBBCCCHkd/IXUo43CyHGsTYAAAAASUVORK5CYII=" />
                    <CharityCard name="United Way" photo="https://pbs.twimg.com/profile_images/1247622311936765952/pf9ffcEj_400x400.png" />
                </div>
                <div className="flex flex-row w-full justify-center space-x-8">
                    <a onClick={() => setSalArmy(true)}><CharityCard name="Make a Wish" photo="https://mma.prnewswire.com/media/444000/Make_A_Wish_Logo.jpg?p=twitter" /></a>
                    <CharityCard name="Salvation Army" photo="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/The_Salvation_Army.svg/1200px-The_Salvation_Army.svg.png"/>
                    <CharityCard name="UNICEF Canada" photo="https://images.squarespace-cdn.com/content/v1/556deb8ee4b08a534b8360e7/1644566784646-37W07KXT6I6X0L0NECII/UNICEF-logo.jpg?format=500w" />
                </div>
                <div className="flex flex-row w-full justify-center space-x-8">
                    <CharityCard name="Breast Cancer Research Foundation" photo="https://p.kindpng.com/picc/s/162-1626930_cancer-logo-png-breast-cancer-research-logo-transparent.png" />
                    <CharityCard name="World Vision" photo="https://pbs.twimg.com/profile_images/1138549671281008648/M9f8C6FY_400x400.png" />
                    <CharityCard name="Child's Play" photo="https://upload.wikimedia.org/wikipedia/en/1/10/Childs_Play_Logo_2018.png" />
                </div>
            <div className="h-20 pb-12"></div>
        </div>
    )
    )
}

export default CharityList
