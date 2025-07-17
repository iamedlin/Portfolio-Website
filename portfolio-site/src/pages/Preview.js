import { useLocation, useNavigate } from 'react-router-dom';

const Preview = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p>No message to preview.</p>;
  }

  const { first, last, email, subject, message } = state;

  return (
    <main style={{ padding: '40px' }}>
      <h2>Preview of Sent Message</h2>
      <p><strong>First Name:</strong> {first}</p>
      <p><strong>Last Name:</strong> {last}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Message:</strong></p>
      <div style={{
        width: '100%',
        padding: '8px',
        marginTop: '4px',
        minHeight: '150px',
        resize: 'vertical',
        whiteSpace: 'pre-wrap',
        background: '#fff',
        borderRadius: '8px',
        border: '1px solid #ddd',
        boxSizing: 'border-box',
      }}>{message}</div>

      <button
        onClick={() => navigate('/contact')}
        style={{
          marginTop: '20px',
          backgroundColor: '#f9dcc0',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
      >
        Back to Contact
      </button>
    </main>
  );
};

export default Preview;
