const Resume = () => {
  return (
    <main style={{ padding: '40px' }}>
        {/* Work Experience Section */}
        <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Work Experience</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gap: '24px',
        alignItems: 'start',
        marginTop: '40px',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
      }}>
        <div style={{ minWidth: '120px', textAlign: 'right', fontWeight: 500 }}>
          <p style={{ margin: 0 }}>2025-Present</p>
        </div>
        <div>
          <strong>Internship</strong>
          <p style={{ margin: 0 }}>
            Guinhawa, Malolos City, Bulacan <br />
            Internship at Bulacan State University
          </p>
        </div>
      </div>
      {/* Education Section */}
      <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Education</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gap: '24px',
        alignItems: 'start',
        marginTop: '40px',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
      }}>
        <div style={{ minWidth: '120px', textAlign: 'right', fontWeight: 500 }}>
          <p style={{ margin: 0 }}>2022-Present</p>
        </div>
        <div>
          <strong>Bulacan State University | Bachelor's Degree</strong>
          <p style={{ margin: 0 }}>
            Guinhawa, Malolos City, Bulacan <br />
            Bachelor of Science in Computer Engineering
          </p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gap: '24px',
        alignItems: 'start',
        marginTop: '40px',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
      }}>
        <div style={{ minWidth: '120px', textAlign: 'right', fontWeight: 500 }}>
          <p style={{ margin: 0 }}>2020 - 2022</p>
        </div>
        <div>
          <strong>Norzagaray Academy Inc. | Senior High School</strong>
          <p style={{ margin: 0 }}>
            A. Villarama St. Poblacion, Norzagaray Bulacan <br />
            Science, Technology, Engineering, and Mathematics (STEM)
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr style={{ margin: '60px 0' }} />

      {/* Skills Section */}
      <h2>Skills &amp; Expertise</h2>
      <ul>
        <li>This is a sample Text</li>
      </ul>


      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <div style={{ textAlign: 'center' }}>
          <p>Click below to download my resume:</p>
          <a
            href="/resume.pdf"
            download
            style={{
              display: 'inline-block',
              backgroundColor: '#F9DCC0',
              color: '#333',
              padding: '12px 30px',
              borderRadius: '30px',
              fontWeight: 'bold',
              textDecoration: 'none',
              marginTop: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
            }}
            className="button"
          >
            Download Resume
          </a>
        </div>
      </div>

    </main>
  );
 /* <main style={{ padding: '40px' }}>
    <h2>Projects</h2>
    <div>
      <h3>Project One</h3>
      <p>Details about the project.</p>
    </div>
    <div>
      <h3>Project Two</h3>
      <p>More details here.</p>
    </div>
  </main>*/
};
export default Resume;