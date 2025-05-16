// src/components/Slider.jsx
import React, { useState } from 'react';
import { Button, Image } from 'react-bootstrap';

function Slider({ images }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="text-center mb-4">
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
      >
        {'<'}
      </Button>

      <Image
        src={images[index]}
        alt={`flag-${index}`}
        style={{ width: '120px', height: '80px', objectFit: 'cover', margin: '0 20px' }}
        rounded
      />

      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => setIndex((index + 1) % images.length)}
      >
        {'>'}
      </Button>

      <div className="mt-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`mx-1 ${i === index ? 'text-dark' : 'text-muted'}`}
            style={{ fontSize: '1.5rem' }}
          >
            •
          </span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
