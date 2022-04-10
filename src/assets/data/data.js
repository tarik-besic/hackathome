import img1 from "../images/carpe.jpg";
import img2 from "../images/civitas.jfif";
import img3 from "../images/asubih-logo.png";

export const data = [
    {
        id:1,
        image:img1,
        name:"Humanitarni bazar",
        desProj:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a. Molestie nunc non blandit massa. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Nulla pellentesque dignissim enim sit amet venenatis urna. Non tellus orci ac auctor augue. Sit amet commodo nulla facilisi nullam vehicula ipsum. Ac tortor vitae purus faucibus ornare suspendisse. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Laoreet non curabitur gravida arcu ac tortor. Porttitor eget dolor morbi non. Porttitor leo a diam sollicitudin tempor id eu nisl. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Nulla posuere `,
        active:false,
        location:"Ilijaš",
        type:['Indirektno','Zagovaranje'],
        organizer:{
            name:"Carpe diem",
            telephone:"060 32 06 605",
            email:"oocarpediem14@outlook.com",
            description:"UDRUŽENJE OMLADINSKA ORGANIZACIJA 'ISKORISTI DAN - CARPE DIEM' je osnovana sa ciljem ostvarivanja zajedničkih i općih interesa kao i osnaživanja mladih",
            logo:img1,
            link:"https://www.facebook.com/omladinskaorganizacijacarpediem/"},
        date:"22.4.2022",
        time:"10:00-17:00",
        hoursToGet:7,
        volNeeded:25
    },
    {  
        id:2,
        image:img2,
        name:"Centar za sve",
        desProj:"Druženje sa članovima udruženja “Budi mi drug“,pisanje pisama prijateljima i crtanje kreativnih crteža",
        active:true,
        location:"Društveni centar Ilijaš-Mrakovo",
        type:['Direktno','Zagovaranje'],
        organizer:{
            name:"Carpe diem",
            telephone:"060 32 06 605",
            email:"oocarpediem14@outlook.com",
            description:"UDRUŽENJE OMLADINSKA ORGANIZACIJA 'ISKORISTI DAN - CARPE DIEM' je osnovana sa ciljem ostvarivanja zajedničkih i općih interesa kao i osnaživanja mladih",
            logo:img1,
            link:"https://www.facebook.com/omladinskaorganizacijacarpediem/"},
        date:"10.4.2022",
        time:"14:00-16:00",
        hoursToGet:2,
        volNeeded:10 
    },
    {   
        id:3,
        image:img3,
        name:"Multimedijalna škola demokratije",
        desProj:"Program “Multimedijalna škola demokratije“ je namjenjen učenicima srednjih škola i ima za cilj kreiranje informisanih i posvećenih građana BiH",
        active:true,
        location:"Online",
        type:['Direktno'],
        organizer:{
            name:"Civitas",
            telephone:"033 261 415",
            email:"civitas@outlook.com",
            description:"CIVITAS program u Bosni i Hercegovini dio je globalne mreže centara za građansko obrazovanje koju administrira Centar za građansko obrazovanje iz Kalabasasa, Kalifornija.",
            logo:img2,
            link:"https://civitas.ba/"},
        date:"5.5.2022",
        time:"60 Sati",
        hoursToGet:60,
        volNeeded:60 
    },

    {   
        id:4,
        image:img1,
        name:"Socijalni dan",
        desProj:"Socijalni dan je dan kada srednjoškolci dobiju priliku da odlaskom na radno mjesto steknu osjećaj za radnu atmosferu i upoznaju se sa osnovnim radnim procesima!",
        active:true,
        location:"Ilijaš",
        type:['Direktno','Zagovaranje'],
        organizer:{
            name:"ASuBiH",
            telephone:"061 582 826",
            email:"asubih@gmail.com",
            description:"Hercegovini (ASuBiH) je nevladina, nestranačka i nepolitička organizacija čiji je osnovni cilj poboljšanje statusa srednjoškolaca u zemlji",
            logo:img3,
            link:"https://asubih.ba/"},
        date:"21.4.2022",
        time:"08:00-14:00",
        hoursToGet:6,
        volNeeded:15 
    },
    
  ];