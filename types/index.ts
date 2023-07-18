import { MouseEventHandler } from "react";

export interface CustomButtonProps{

    title:string;
    
    handleClick?:MouseEventHandler<HTMLButtonElement>; //IT IS OPTIONAL THATWHY QUESTIONMARK
    btnType?:"button" | "submit";
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
    containerStyles?:string;






}


export interface FilterProps{

    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}


export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer:( manufacturer:string)=> void
    //setmanufacturer is a function which take manufacturer as a string and doesnt return anything

   
  }



  export interface carProps{
    city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
  }

export interface OptionProps{
    title:string,
    value:string
}

 export  interface customFilterProps{
    title:string;
    options:OptionProps[];
  }

  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }
  
  export interface HomeProps {
    searchParams: FilterProps;
  }
  