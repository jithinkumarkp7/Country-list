import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllCountries, loadMore, filterByRegion } from '../features/countries/countrySlice';
import { useGetCountriesQuery } from '../features/countries/countriesApi';
import { Container, Row, Col, Button, Spinner, Dropdown } from 'react-bootstrap';
import Slider from '../components/slider';
import CountryCard from '../components/CountryCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { data = [], isLoading } = useGetCountriesQuery();
  const { visible, filter } = useSelector((state) => state.countries);

  useEffect(() => {
    console.log({ jithuji: data });

    if (data?.length) {
      dispatch(setAllCountries(data));
    }
  }, [data, dispatch]);

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" size="sm">
            {filter}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {['All', ...Array.from(new Set(data.map(country => country.region).filter(Boolean)))].map(region => (
              <Dropdown.Item key={region} onClick={() => dispatch(filterByRegion(region))}>
                {region}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Slider images={visible.map(c => c.flag)} />


      <Row>
        {visible.map((country, i) => (
          <Col key={i} md={6} className="mb-3">
            <CountryCard country={country} />
          </Col>
        ))}
      </Row>

      {isLoading && <Spinner animation="border" />}

      {!isLoading && (
        <div className="text-center mt-3">
          <Button variant="dark" onClick={() => dispatch(loadMore())}>
            Load more
          </Button>
        </div>
      )}
    </Container>
  );
}

export default HomePage;
