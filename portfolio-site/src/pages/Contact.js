import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      first_name: formData.first,
      last_name: formData.last,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          alert('Failed to send message. Please try again.');
          console.log('FAILED...', err);
        }
      );
  };

  return (
    <main style={{ padding: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Left Column: Contact Info */}
        <div style={{ flex: '1', minWidth: '300px', marginRight: '40px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>Contact</h2>
          <p style={{ marginBottom: '30px' }}>Looking forward to hearing from you</p>

          <p><strong>Phone</strong></p>
          <p>09772468871</p>

          <p style={{ marginTop: '20px' }}><strong>Email</strong></p>
          <p>naseedielyn@gmail.com</p>
        </div>

        {/* Right Column: Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{ flex: '1', minWidth: '300px' }}
        >
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <div style={{ flex: 1 }}>
              <label>First Name *</label>
              <input
                name="first"
                required
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label>Last Name *</label>
              <input
                name="last"
                required
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <div style={{ flex: 1 }}>
              <label>Email *</label>
              <input
                name="email"
                type="email"
                required
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label>Subject</label>
              <input
                name="subject"
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#F9DCC0',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '30px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
