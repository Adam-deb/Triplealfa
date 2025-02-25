import Image from 'next/image';

export default function Signature1() {
  return (
    <table
      width="100%"
      cellSpacing="0"
      cellPadding="0"
      border="0"
      style={{ maxWidth: '600px', fontFamily: 'Arial, sans-serif' }}
    >
      <tbody>
        <tr>
          <td>
            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td width="100" style={{ paddingRight: '20px' }}>
                    <Image
                      src="/email-signitures/headshots/Adam.png"
                      alt="headshot"
                      width={100}
                      height={100}
                      style={{ borderRadius: '50%' }}
                    />
                  </td>
                  <td style={{ verticalAlign: 'top', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '5px', right: '0px' }}>
                      <Image
                        src="/black_logo.png"
                        alt="Triple Alfa logo"
                        width={75}
                        height={45}
                      />
                    </div>
                    <p style={{ margin: 0, fontSize: '22px', fontWeight: 'bold', color: '#333' }}>
                      Adam Debski
                    </p>
                    <p
                      style={{
                        margin: '2px 0 0 0',
                        fontSize: '14px',
                        color: '#333',
                        borderBottom: '1px solid #333',
                        paddingBottom: '10px',
                      }}
                    >
                      Chief Technical Officer | Triple Alfa
                    </p>
                    <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#555' }}>
                      <a href="tel:+447860121271" style={{ color: 'black', textDecoration: 'none' }}>
                        <span style={{ fontWeight: 'bold' }}>M:</span> +44 7860 121271
                      </a>{' '}
                      |{' '}
                      <a href="mailto:adam@triplealfa.com" style={{ color: 'black', textDecoration: 'none' }}>
                      <span style={{ fontWeight: 'bold' }}>E:</span> adam@triplealfa.com
                      </a>
                    </p>
                    <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#555' }}>
                      <a href="https://triplealfa.com" style={{ color: 'black', textDecoration: 'none' }}>
                        <span style={{ fontWeight: 'bold' }}>W:</span> triplealfa.com
                      </a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
