const Resume = () => {
  return (
    <main style={{ padding: '40px' }}>
        {/* Work Experience Section */}
        <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Work Experience</h2>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
        <div style={{ minWidth: '150px' }}>
          <p>2025-Present</p>
        </div>
        <div>
          <strong>Internship</strong>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
          </p>
        </div>
      </div>
      {/* Education Section */}
      <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Education</h2>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
        <div style={{ minWidth: '150px' }}>
          <p>2022-Present</p>
        </div>
        <div>
          <strong>Bulacan State University | Bachelor's Degree</strong>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
        <div style={{ minWidth: '150px' }}>
          <p>2020 - 2022</p>
        </div>
        <div>
          <strong>Norzagaray Academy Inc. | Senior High School</strong>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
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

      <main className="section">
  <div className="centered">
    <p>Click below to download my resume:</p>
    <a href="/resume.pdf" download className="button">Download Resume</a>
  </div>
</main>

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