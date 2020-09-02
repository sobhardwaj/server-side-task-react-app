import React, { Fragment, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import ToastsShowcase from './Toast';
import './rocket.css'
import { url } from 'inspector';
// import axios from 'axios';


const Data  = [
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark'
  ].map((variant, idx) => (
    <Card
      bg={variant.toLowerCase()}
      key={idx}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem' }}
      className="mb-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>{variant} Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  ));

function Rocket() {
  const [data, setData] = useState<any>([]);
  const [years, setYears] = useState<any>(
    ['2006','2007','2008','2009', '2010',
    '2011','2012','2013','2014', '2015',
    '2016','2017','2018','2019', '2020',
  ]);
  const  [hasError, setErrors] =  useState(false)
  const  [planets,setPlanets ]= useState({})
  const [params, setParams] = useState<any>({});
  const [query, setQuery] = useState('');
  const [api_url, setApiUrl] = useState<any>('');
  const [url, setUrl] = useState<any>('');
  const [filters, setFilters] = useState({})

  const filterData = (ev : any) => {
    setFilters({...ev})
    console.log('setFilters: ', filters);
  }

  const filterSearch = (ev: any, year: any) => {
    
    setApiUrl(new URL('https://api.spacexdata.com/v3/launches?limit=100'));
    setParams({launch_year : year, ...filters})

    Object.keys(params).forEach(key =>  api_url.searchParams.append(key, params[key]))
    setUrl(api_url.href)
    console.log('url: ', url);
    console.log('api_url: ', api_url);

  };
  useEffect(() => {
    const fetchData = async (url : string) => {
      const result : any = await fetch(
        url,
      )
      result.json()
        .then((res: any) => {
          setData(res)
          console.log(res);
        })
    };
 
    fetchData(url);
  }, [url, filters]);

  const clicHandlar = () => {
    console.log('ev: ');
  }

  return (
    <Fragment>
    <div className="d-flex flex-sm-row flex-column justify-content-between">

      <div className="m-1">
        <Card  className="m-auto p-2" border="info" style={{ width: '16rem' }}>
          <h6>Filters</h6> 
          <p> launch years </p>
          <Button  className="btn btn-info m-1" style={{ width: '40%' }}
            onClick={e=> clicHandlar()}> click here </Button>
          <div className="d-flex flex-row flex-wrap justify-content-between">
          { years.map((yr : any) => 
            <Button key={yr} className="btn btn-info m-1" style={{ width: '40%' }}
            onClick={e=> filterSearch(e, yr)}> {yr} </Button>
            
          ) 
        }
          </div>
        
          <hr/>
      
        Successful Launch 
        <hr/>
        <Button onClick={e=> filterData({launch_success : true})} value='true' className="btn btn-info m-1"> True </Button>
        <Button onClick={e=> filterData({launch_success : false})} value='false' className="btn btn-info m-1"> False </Button>
        Successful Landing
        <hr/>
        <Button onClick={e=> filterData({land_success : true})} value='true'  className="btn btn-info m-1"> True </Button>
        <Button onClick={e=> filterData({land_success : false})} value='false' className="btn btn-info m-1"> False </Button>
        </Card>
      </div>
      <div className="data-contianer">
        { data  ?
        data.map((item : any) => (
          <Card key={item.flight_number}  className="m-1 p-2" border="info" style={{ width: '16rem' }}>
            <Card.Img  variant="top" src= {item.links.mission_patch_small} />
            <Card.Text>
              <span>{item.mission_name + ' '+ '#' + item.flight_number}</span> <br />
              <span>  Mission IDs : {item.mission_id}</span> <br />
              <span>  Launch year : {item.launch_year}</span> <br />
              <span>  Successful launch : {item.launch_success}</span> <br />
              <span>  Successful landing {}</span>
    				</Card.Text>
          </Card>
        )) : 
            <Card>
            <Card.Text>
          This is no Data..
      </Card.Text>
          </Card>
        }
    </div>
    </div>
    </Fragment>
  );
}

export default Rocket;
