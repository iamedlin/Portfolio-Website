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
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      first_name: formData.first,
      last_name: formData.last,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        'service_4xjonh4',
        'template_zdj8gw4',
        templateParams,
        'ICax7EZu6IgwjXmXQ'
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setPreview({ ...formData });
          setFormData({
            first: '',
            last: '',
            email: '',
            subject: '',
            message: '',
          });
          setLoading(false);
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          alert('Failed to send message. Please try again.');
          setLoading(false);
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
                value={formData.first}
                onChange={handleChange}
                style={{ width: '90%', padding: '8px', marginTop: '4px' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label>Last Name *</label>
              <input
                name="last"
                required
                value={formData.last}
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
                value={formData.email}
                onChange={handleChange}
                style={{ width: '90%', padding: '8px', marginTop: '4px' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label>Subject</label>
              <input
                name="subject"
                value={formData.subject}
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
              value={formData.message}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#F9DCC0',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '30px',
                fontWeight: 'bold',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                minWidth: '120px',
              }}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>

      {/* Preview Section */}
      {preview && (
        <div style={{ marginTop: '40px', background: '#f5f5f5', padding: '24px', borderRadius: '12px', maxWidth: '600px' }}>
          <h3 style={{ marginBottom: '16px' }}>Preview of Sent Message</h3>
          <p><strong>First Name:</strong> {preview.first}</p>
          <p><strong>Last Name:</strong> {preview.last}</p>
          <p><strong>Email:</strong> {preview.email}</p>
          <p><strong>Subject:</strong> {preview.subject}</p>
          <p><strong>Message:</strong></p>
          <div style={{ whiteSpace: 'pre-wrap', background: '#fff', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}>{preview.message}</div>
        </div>
      )}
    </main>
  );
};

export default Contact;
