import styles from "../Css/Informations.module.css";

var alignedLeft = {
  textAlign: "left"
};
export const Entrance = () => {
  const entranceDate = [
    {
      entranceNo: (
        <>
          1<sup>st</sup>
        </>
      ),
      date: "August 6, 2024 @9:00AM"
    },
    {
      entranceNo: (
        <>
          2<sup>nd</sup>
        </>
      ),
      date: "August 13, 2024 @9:00AM"
    },
    {
      entranceNo: (
        <>
          3 <sup>rd</sup>
        </>
      ),
      date: "August 20, 2024 @9:00AM"
    },
    {
      entranceNo: (
        <>
          4 <sup>th</sup>
        </>
      ),
      date: "August 27, 2024 @9:00AM"
    }
  ];
  return (
    <>
      <section className={styles["section"]}>
        <h2>Entrance Examinations</h2>
        <p>
          There are four dates set for the entrance exams. All students wanting
          to attend the institution are kindly asked to take notes of the dates.
          The entrance fee is $800.00LD which should be paid at the office of
          the registrar.
        </p>
        <div>
          <h4 style={alignedLeft}>Entrance Schedule</h4>
          <dl className={styles["entrance-date"]}>
            {entranceDate.map(element => {
              return (
                <>
                  <dt>{element.entranceNo} Entrance</dt>
                  <dd>{element.date}</dd>
                </>
              );
            })}
          </dl>
        </div>
      </section>
    </>
  );
};

export const Registration = () => {
  const requirements = [
    {
      listItem: "Pass an entrance exam administered by the school"
    },
    {
      listItem: "Sit an interview"
    },
    {
      listItem: "Fill an application form"
    },
    {
      listItem:
        "Submit all required documents (report card, transcript, and letter of recommendation) from the past school attended during the time of interview"
    },
    {
      listItem: "Buy a set of uniform from the school for uniformity; and"
    },
    {
      listItem: "Attend a compulsory six-week phonics class"
    }
  ];
  return (
    <>
      <section className={styles["section"]}>
        <h2>Registration</h2>
        <p>
          The registration process begins on August 10, 2024 and ends August 30,
          2024. Any student registering after the stipulated dates will pay a
          late fee of $500.00LD. All students seeking admission at DRIMS School
          System must:
          <ul className={styles["requirements-list"]}>
            {requirements.map(element => (
              <li>{element.listItem}</li>
            ))}
          </ul>
        </p>
      </section>
    </>
  );
};

export const FeeStructure = () => {
  const generalFees = [
    {
      grade: (
        <>
          K<sub>3</sub>-K<sub>5</sub>
        </>
      ),
      registration: 10000,
      firstInstallment: 10000,
      secondInstallment: 0.0,
      thirdInstallment: 0
    },
    {
      grade: "1-3",
      registration: 5000,
      firstInstallment: 12500,
      secondInstallment: 3500,
      thirdInstallment: 2000
    },
    {
      grade: "4-6",
      registration: 5000,
      firstInstallment: 14500,
      secondInstallment: 3500,
      thirdInstallment: 2000
    },
    {
      grade: "7-9",
      registration: 5000,
      firstInstallment: 16500,
      secondInstallment: 4000,
      thirdInstallment: 2500
    },
    {
      grade: "10-11",
      registration: 5500,
      firstInstallment: 17500,
      secondInstallment: 5000,
      thirdInstallment: 3500
    },
    {
      grade: "12",
      registration: 5500,
      firstInstallment: 20000,
      secondInstallment: 5000,
      thirdInstallment: 4000
    }
  ];
  const installmentDates = [
    {
      installmentNo: (
        <>
          1<sup>st</sup>
        </>
      ),
      date: "During Registration"
    },
    {
      installmentNo: (
        <>
          2 <sup>nd</sup>
        </>
      ),
      date: "February 6, 2025"
    },
    {
      installmentNo: (
        <>
          3 <sup>rd</sup>
        </>
      ),
      date: "May 17, 2025"
    }
  ];

  const newStudentRequiredFees = [
    {
      grade: (
        <>
          K<sub>3</sub> - 6
        </>
      ),
      cost: 40,
      purpose: "P.E Suit, Sport Day Wear and Socks"
    },
    {
      grade: "7 - 9",
      cost: 45,
      purpose: "P.E Suit, Sport Day Wear and Socks"
    },
    {
      grade: "10 - 11",
      cost: 70,
      purpose: "LAB Fee, P.E Suit, Sport Day Wear and Socks"
    }
  ];

  const uniform = [
    {
      shirt: "Sky-blue shirt (short sleeves)",
      trouser:
        "Navy-blue trouser (short trouser from kindergarten to grade 5 and long trouser from grade 6 to grade )",
      shoe: "Black shoe or sneaker",
      socks: "Navy-blue socks",
      belt: "black belt",

      //Girls Uniform
      blouse: "Sky-blue blouse (short sleeves)",
      skirtOrJumper:
        "Navy-blue jumper (from kindergarten to grade 9); and navy-blue skirt (from grade 10 to grade 12)",
      femaleShoe: "Black low-heel shoe or sneaker",
      femaleSocks: "sky-blue socks"
    }
  ];
  return (
    <>
      <section className={styles["section"]}>
        <h2>Fees Structure</h2>
        <p>
          This section contains informations about all the required fees for
          every student during this academic year.
        </p>
        <h4>Registration and Tuition fees</h4>
        <div style={{ overflowX: "scroll", padding: "2px" }}>
          <table>
            <thead>
              <tr>
                <td rowspan="2" style={{padding: "40px"}}>Class</td>
                <td rowspan="2">Registration ($)</td>
                <td colspan="3">Tuition</td>
                <td rowspan="2">Grand Total ($)</td>
              </tr>
              <tr>
                <td>First Installments ($)</td>
                <td>Second Installments ($)</td>
                <td>Third Installments ($)</td>
              </tr>
            </thead>
            {generalFees.map(element => (
              <tr>
                <td>{element.grade}</td>
                <td>{element.registration.toFixed(2)}LD</td>
                <td>{element.firstInstallment.toFixed(2)}LD</td>
                <td>{element.secondInstallment.toFixed(2)}LD</td>
                <td>{element.thirdInstallment.toFixed(2)}LD</td>
                <td>
                  {(
                    element.firstInstallment +
                    element.secondInstallment +
                    element.thirdInstallment
                  ).toFixed(2)}
                  LD
                </td>
              </tr>
            ))}
          </table>
        </div>
        <h4 style={alignedLeft}>Installments Payment Dates</h4>
        <dl className={styles["installment-dates"]}>
          {installmentDates.map(element => (
            <>
              <dt>{element.installmentNo} Installment:</dt>
              <dd>{element.date}</dd>
            </>
          ))}
        </dl>
        <p>
          Note: The registration cost is included in the first installment
          payment.
        </p>
        <h4>New Student Requirements during Registration</h4>
        <table className={styles["newStudentsRequiredFees"]}>
          <thead>
            <tr>
              <th>Class</th>
              <th>Fees ($)</th>
              <th>Purpose</th>
            </tr>
          </thead>
          {newStudentRequiredFees.map(element => (
            <tr>
              <td>{element.grade}</td>
              <td>{element.cost.toFixed(2)}USD</td>
              <td>{element.purpose}</td>
            </tr>
          ))}
        </table>
        <h2 style={alignedLeft}>Uniforms</h2>
        <h4 style={alignedLeft}>Boys:</h4>
        <ul className={styles["boys-uniform"]}>
          {uniform.map(element => (
            <>
              <li>{element.shirt}</li>
              <li>{element.trouser}</li>
              <li>{element.shoe}</li>
              <li>{element.socks}</li>
              <li>{element.belt}</li>
            </>
          ))}
        </ul>

        <h4 style={alignedLeft}>Girls:</h4>
        <ul className={styles["girls-uniform"]}>
          {uniform.map(element => (
            <>
              <li>{element.blouse}</li>
              <li>{element.skirtOrJumper}</li>
              <li>{element.femaleShoe}</li>
              <li>{element.femaleSocks}</li>
            </>
          ))}
        </ul>
      </section>
    </>
  );
};
