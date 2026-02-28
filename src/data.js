import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
    {id: 1, href: '#home', text: 'home'},
    {id: 2, href: '#about', text: 'about'},
    {id: 3, href: '#services', text: 'services'},
    {id: 4, href: '#tours', text: 'tours'},
]

export const socialLinks = [
    {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook'},
    {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace'},
]

export const services = [
    {id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Transparent pricing, smart route planning, and bundled experiences help you travel farther without sacrificing quality.'},
    {id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'From beginner-friendly nature walks to full-day summit treks, every route is chosen for scenery, safety, and variety.'},
    {id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'After each adventure, relax in handpicked stays with reliable transport, clean rooms, and thoughtful amenities.'},
]

export const tours = [
    {id : 1 , image:tour1 , date:'august 26th, 2020',title:'Tibet Adventure', text:'High-altitude monasteries, turquoise alpine lakes, and sweeping Himalayan views make this route ideal for travelers craving dramatic scenery.',
        country:'china', duration: '6 days', price:'from $2100'},
    {id : 2 , image:tour2 , date:'october 1st, 2020',title:'best of java', text:'Catch volcanic sunrises, explore temple architecture, and walk through lush rice terraces on this culture-rich island escape.',
        country:'indonesia', duration: '11 days', price:'from $1400'},
    {id : 3 , image:tour3 , date:'september 15th, 2020',title:'explore hong kong', text:'Ride historic ferries, browse neon night markets, and hike harbor-view trails to experience both the energy and calm of the city.',
        country:'hong kong', duration: '8 days', price:'from $5000'},
    {id : 4 , image:tour4 , date:'december 5th, 2019',title:'kenya highlights', text:'Track wildlife across open savannah game drives and visit local communities for a safari experience rooted in conservation.',
        country:'kenya', duration: '20 days', price:'from $3300'},
]   
