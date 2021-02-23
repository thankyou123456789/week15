let year = prompt("Enter Year of birth : ");
let zodiac = parseInt(year);

function Yearofthezodiac(zodiac) {
    if (zodiac == 1972 || zodiac == 1984 || zodiac == 1996 || zodiac == 2008 || zodiac == 2020) {
        alert("Rat Zodiac");
        console.log("Rat Zodiac");
        document.getElementById("zodiac01").innerHTML = "Rat Zodiac";
    } else if (zodiac == 1973 || zodiac == 1985 || zodiac == 1997 || zodiac == 2009 || zodiac == 2021) {
        alert(year + "Oxen Zodiac");
        console.log("Oxen Zodiac");
        document.getElementById("zodiac01").innerHTML = "Oxen Zodiac";
    } else if (zodiac == 1974 || zodiac == 1986 || zodiac == 1998 || zodiac == 2010 || zodiac == 2022) {
        alert("Tiger Zodiac");
        console.log("Tiger Zodiac");
        document.getElementById("zodiac01").innerHTML = "Tiger Zodiac";
    } else if (zodiac == 1975 || zodiac == 1987 || zodiac == 1999 || zodiac == 2011 || zodiac == 2023) {
        alert("Rabbit Zodiac");
        console.log("Rabbit Zodiac");
        document.getElementById("zodiac01").innerHTML = "Rabbit Zodiac";
    } else if (zodiac == 1976 || zodiac == 1988 || zodiac == 2000 || zodiac == 2012 || zodiac == 2024) {
        alert("Dragon Zodiac");
        console.log("Dragon Zodiac");
        document.getElementById("zodiac01").innerHTML = "Dragon Zodiac";
    } else if (zodiac == 1977 || zodiac == 1989 || zodiac == 2001 || zodiac == 2013 || zodiac == 2025) {
        alert("Suake Zodiac");
        console.log("Suake Zodiac");
        document.getElementById("zodiac01").innerHTML = "Suake Zodiac";
    } else if (zodiac == 1978 || zodiac == 1990 || zodiac == 2002 || zodiac == 2014 || zodiac == 2026) {
        alert("Horse Zodiac");
        console.log("Horse Zodiac");
        document.getElementById("zodiac01").innerHTML = "Horse Zodiac";
    } else if (zodiac == 1979 || zodiac == 1991 || zodiac == 2003 || zodiac == 2015 || zodiac == 2027) {
        alert("Sheep Zodiac");
        console.log("Sheep Zodiac");
        document.getElementById("zodiac01").innerHTML = "Sheep Zodiac";
    } else if (zodiac == 1980 || zodiac == 1992 || zodiac == 2004 || zodiac == 2016 || zodiac == 2028) {
        alert("Monkey Zodiac");
        console.log("Monkey Zodiac");
        document.getElementById("zodiac01").innerHTML = "Monkey Zodiac";
    } else if (zodiac == 1981 || zodiac == 1993 || zodiac == 2005 || zodiac == 2017 || zodiac == 2029) {
        alert("Rooster Zodiac");
        console.log("Rooster Zodiac");
        document.getElementById("zodiac01").innerHTML = "Rooster Zodiac";
    } else if (zodiac == 1982 || zodiac == 1994 || zodiac == 2006 || zodiac == 2018 || zodiac == 2030) {
        alert("Dog Zodiac");
        console.log("Dog Zodiac");
        document.getElementById("zodiac01").innerHTML = "Dog Zodiac";
    } else if (zodiac == 1983 || zodiac == 1995 || zodiac == 2007 || zodiac == 2019 || zodiac == 2031) {
        alert("Pig Zodiac");
        console.log("Pig Zodiac");
        document.getElementById("zodiac01").innerHTML = "Pig Zodiac";
    }
}
Yearofthezodiac(year);