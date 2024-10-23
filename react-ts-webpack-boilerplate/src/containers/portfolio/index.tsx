import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageHeadercontent';
import { BsInfoCircleFill } from 'react-icons/bs';
import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.jpg';
import ImageThree from '../../images/image3.jpg';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image5.jpg';
import "./styles.css";

const portfolioData = [
  {
    id : 2,
    name : "fern",
    image : ImageFive,
    link : ""
  },
  {
    id : 2,
    name : "city",
    image : ImageOne,
     link : ""
  },
  {
    id : 3,
    name : "rabbit",
    image : ImageTwo,
     link : ""
  },
  {
    id : 3,
    name : "group",
    image : ImageThree,
     link : ""
  },
  {
    id : 2,
    name : "miku",
    image : ImageFour,
     link : ""
  }
]

const filterData = [
  {
    filterId : 1,
    label : 'All',
     link : ""
  },
  {
    filterId : 2,
    label : 'One person',
     link : ""
  },
  {
    filterId : 3,
    label : 'Not one person',
     link : ""
  }
]
const Portfolio = () => {

const [filteredvalue,setFilteredValue] = useState(1);
const [hoveredValue, setHoveredValue] = useState<number | null>(null);
function handleFilter(filterId : number){
  setFilteredValue(filterId);
};

function handleHover(index : number | null){
  setHoveredValue(index);
}
const filteredItems = filteredvalue === 1 
? portfolioData 
: portfolioData.filter(item => item.id === filteredvalue);



  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='portfolio__content'>
        <ul className='portfolio__content__filter'>
          {
            filterData.map(item=>(
              <li className={item.filterId === filteredvalue ? 'active' : ''} 
              onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                {item.label}
              </li>
            ))
          }
        </ul>
        <div className='portfolio__content__cards'>
          {
            filteredItems.map((item, index)=>(
              <div className='portfolio__content__cards__item'
                key={'cardItme${item.name.trim()}'}
                onMouseEnter={()=>handleHover(index)}
                onMouseLeave={()=>handleHover(null)}
              >

                <div className='portfolio__content__cards__item__img-wrapper'>
                  <a>
                    <img alt="dummy data" src={item.image}/>
                  </a>
                </div>
                <div className='overlay'>
                  {index === hoveredValue && (
                      <div>
                        <p>{item.name}</p>
                        <button>Visit</button>
                      </div>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
