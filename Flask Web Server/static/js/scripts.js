/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

team_description = {
    "Arsenal": "Arsenal is an English football club based in London and home to the Emirates Stadium in Holloway.",
    "Aston Villa": "Aston Villa is an English professional football club based in Aston, Birmingham.",
    "Birmingham": "Birmingham City FC is a football club based in Birmingham, England.",
    "Blackburn": "Blackburn Rovers Football Club is a professional football club based in Blackburn, Lancashire, England.",
    "Blackpool": "Blackpool FC is a football club based in Blackpool, a coastal city in Lancashire, England.",
    "Bolton": "Bolton Wanderers Football Club is an English professional football club based in Bolton, Greater Manchester, England.",
    "Bournemouth": "A.F.C. Bournemouth is a professional football club based in Bournemouth, Dorset, England. ",
    "Bradford": "Bradford City A.F.C. is an English football club based in Bradford, West Yorkshire.",
    "Brentford": "Brentford FC is a football club based in the Brentford area, Hounslow District, London, England.",
    "Brighton": "Brighton & Hove Albion Football Club is an English professional football club based in Brighton and Hove, East Sussex.",
    "Burnley": "Burnley FC is a professional football club based in Burnley, England. It was founded in 1882 and joined the Football League in 1888.",
    "Cardiff": "Cardiff City FC is a football club based in Cardiff, Wales.",
    "Charlton": "Charlton Athletic Football Club is an English football club based in Charlton, southeast London.",
    "Chelsea": "Chelsea FC is a football club based in London, England. It was founded in 1905 and currently plays in the English Premier League.",
    "Coventry": "Coventry City FC is an English football club based in Coventry.",
    "Crystal Palace": "Crystal Palace Football Club is an English football club based in the borough of Croydon, London.",
    "Derby": "Derby County Football Club is a football club based in Derby, England.",
    "Everton": "Everton FC is a football club based in Liverpool, England.",
    "Fulham": "Fulham FC is a professional football club based in Fulham, Greater London, England.",
    "Huddersfield": "Huddersfield Town AFC is an English football team founded in 1908 based in Huddersfield, West Yorkshire.",
    "Hull": "Hull City AFC is an English football club based in Kingston upon Hull, East Riding, Yorkshire",
    "Ipswich": "Ipswich Town Football Club is a professional football club based in Ipswich, Suffolk, England.",
    "Leeds": "Leeds United Football Club is an English professional football club based in Leeds, West Yorkshire.",
    "Leicester": "Leicester City Football Club is an English professional football club based in Leicester.",
    "Liverpool": "Liverpool is a Premier League football club based in Liverpool, Merseyside, England.",
    "Man City": "Manchester City FC is an English football club founded in 1880 from Manchester, Greater Manchester, England.",
    "Man United": "Manchester United Football Club is an English professional football club based in Manchester, England.",
    "Middlesbrough": "Middlesbrough Football Club is a club founded in 1876 based in Middlesbrough, near Newcastle, England.",
    "Newcastle": "Newcastle United Football Club is a professional football club based in Newcastle upon Tyne, Tyne Weir, England.",
    "Norwich": "Norwich City Football Club is an English football club based in Norwich, founded in 1902.",
    "Portsmouth": "Portsmouth Football Club is an English football club based in Portsmouth, Hampshire.",
    "QPR": "Queens Park Rangers Football Club is an English professional football club based in London.",
    "Reading": "Reading FC is a football club based in Reading, Berkshire, England, founded in 1871.",
    "Sheffield United": "Sheffield United Football Club is an English football club based in Sheffield, South Yorkshire.",
    "Southampton": "Southampton Football Club is an English professional football team based in Southampton, Hampshire, South England.",
    "Stoke": "Stoke City Football Club is an English professional football club based in Stoke-on-Trent.",
    "Sunderland": "Sunderland Association Football Club is a football club based in Tyne Weir, England.",
    "Swansea": "Swansea City AFC is a football club based in Swansea, Wales.",
    "Tottenham": "Tottenham Hotspur FC is a professional football club based in Tottenham, North London, England.",
    "Watford": "Watford Football Club is a football club of the English Premier League, based in Watford, Hertfordshire.",
    "West Brom": "West Bromwich Albion Football Club is an English football club based in West Bromwich.",
    "West Ham": "West Ham United Football Club is an English football club based in London Stadium in East London.",
    "Wigan": "Wigan Athletic Football Club is a professional football club based in Wigan, Greater Manchester, England.",
    "Wolves": "Wolverhampton Wanderers Football Club is based in Wolverhampton, England.",
}

function handleOnChange2(e) {
    // 선택된 데이터 가져오기
    const value = e.value;
    
    // 데이터 출력
    document.getElementById('home_name').innerText = value;
    //document.getElementById('home_graph').innerText = value;
    document.getElementById('home_desc').innerText = team_description[value];
    
      
  }
  
function handleOnChange(e) {
    // 선택된 데이터 가져오기
    const value = e.value;
    
    // 데이터 출력
    document.getElementById('away_name').innerText = value;
    //document.getElementById('away_graph').innerText = value;
    document.getElementById('away_desc').innerText = team_description[value];
}

// async function getPrediction() {
//     const url = "http://localhost:5000"
//     const result = await fetch(url).
// }



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});