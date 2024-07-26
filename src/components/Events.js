import React, { useEffect, useRef } from 'react';

function Events() {
  const eventsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const events = eventsRef.current;
      if (events) {
        const rect = events.getBoundingClientRect();
        const scrollPercentage = (window.innerHeight - rect.top) / window.innerHeight;
        
        if (scrollPercentage > 0 && scrollPercentage < 1) {
          events.style.transform = `translateY(${(1 - scrollPercentage) * 50}px)`;
          events.style.opacity = Math.min(scrollPercentage * 2, 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const events = [
    {
      title: "AI Conference 2023",
      date: "September 15-17, 2023",
      description: "Attended and presented a paper on 'Advanced NLP Techniques in Chatbot Development'"
    },
    {
      title: "Hackathon: Code for Change",
      date: "July 1-3, 2023",
      description: "Led a team of 4 to develop an AI-powered solution for sustainable urban planning"
    },
    {
      title: "Machine Learning Workshop",
      date: "May 20, 2023",
      description: "Conducted a hands-on workshop on 'Implementing Neural Networks with TensorFlow'"
    },
    {
      title: "Tech Startup Pitch Competition",
      date: "March 5, 2023",
      description: "Finalist in the university-wide competition for an AI-driven healthcare solution"
    }
  ];

  return (
    <section id="events" className="section" ref={eventsRef}>
      <div className="container">
        <h2>Events & Achievements</h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
