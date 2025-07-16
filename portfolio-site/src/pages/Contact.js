import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [showPreviewButton, setShowPreviewButton] = useState(false);
  const navigate = useNavigate();

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
        'service_4xjonh4',         // Replace with your EmailJS service ID
        'template_zdj8gw4',        // Replace with your template ID
        templateParams,
        'ICax7EZu6IgwjXmXQ'        // Replace with your public key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setShowPreviewButton(true);  // Show preview button after success
          setLoading(false);
        },
        (err) => {
          alert('Failed to send message. Please try again.');
          console.error('FAILED...', err);
          setLoading(false);
        }
      );
  };

  const handlePreview = () => {
    navigate('/preview', { state: formData });
  };

  return (
    <main style={{ padding: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Contact Info */}
        <div style={{ flex: '1', minWidth: '300px', marginRight: '40px' }}>
          <h2>Contact</h2>
          <p>Looking forward to hearing from you</p>
          <p><strong>Phone</strong></p>
          <p>09772468871</p>
          <p style={{ marginTop: '20px' }}><strong>Email</strong></p>
          <p>naseedielyn@gmail.com</p>
        </div>

        {/* Contact Form */}
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

          {/* Preview Button (shows after submission) */}
          {showPreviewButton && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button
                type="button"
                onClick={handlePreview}
                style={{
                  backgroundColor: '#D4ECDD',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  minWidth: '120px',
                }}
              >
                Preview
              </button>
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default Contact;
