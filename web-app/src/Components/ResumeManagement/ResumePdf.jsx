import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  title: {
    fontSize: 60,
  },
  rowView: {
    justifyContent: "center",
    flexDirection: "row",
  },
  colView: {
    flexDirection: "column",
    padding: 15,
  },
});

const data = {
  fullName: "Jonathan Philip",
  region: "Kochi",
  city: "Vennala",
  pinCode: "682308",
  email: "jp@gmail.com",
  phone: "8297459963",
  work: [
    {
      jobTitle: "Programmer Analyst",
      employer: "TCS",
      startDate: "13/12/2000",
      endDate: "10/1/2014",
    },
    {
      jobTitle: "Project Manager",
      employer: "IBM",
      startDate: "10/1/2014",
      endDate: "10/9/2019",
    },
  ],
  project:
    "has, pues, estas prevenciones, no quiso aguardar más tiempo a poner en efeto su pensamiento, apretándole a ello la falta que él pensaba que hacía en el mundo su tardanza, según eran los agravios que pensabadeshacer, tuertos que enderezar, sinrazones que emendar y abusos que mejorar y deudas que satisfacer. Y así, sin dar parte a persona alguna",

  education: [
    {
      qualification: "10",
      institution: "NSS",
      city: "Kochi",
      year: "1995",
    },
    {
      qualification: "12",
      institution: "NSS",
      city: "Kochi",
      year: "1997",
    },
  ],
  skills: [
    { value: "React", label: "React" },
    { value: "Javascript", label: "Javascript" },
    { value: "MongoDb", label: "MongoDb" },
  ],
  achievements:
    "verdadera historia de mis famosos hechos, que el sabio que los escribiere no ponga, cuando llegue a contar esta mi primera salida tan de mañana, desta manera?: Apenas había el rubicundo Apolo tendido por la faz de la ancha y espaciosa tierra las doradas hebras de sus hermosos cabellos, y apenas los pequeños y pintados pajarillos con sus arpadas lenguas habían saludado con dulce y meliflua armonía la venida de la rosada Aurora, que, dejando la blanda cama del celoso marido, por las puertas y balcones del manchego horizonte a los mortales se mostraba, cuando el famoso caballero don Quijote de la Mancha, dejando las ociosas plumas, subió sobre su famoso caballo Rocinante y comenzó a caminar por el antiguo y conocido Campo de Mont",
};

// Create Document Component
export const ResumePdf = (props) => {
  console.log("inside");
  return (
    <PDFDownloadLink
      document={
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.rowView}>
              <Text style={styles.title}>{data.fullName}</Text>
            </View>
            <View style={styles.rowView}>
              <Text>{data.city}</Text>
              <Text> , </Text>
              <Text>{data.region}</Text>
            </View>
            <View style={styles.rowView}>
              <Text>{data.pinCode}</Text>
            </View>
            <View style={styles.rowView}>
              <Text>{data.email}</Text>
            </View>
            <View style={styles.rowView}>
              <Text>{data.phone}</Text>
            </View>
            <View style={styles.colView}>
              <Text>Work Experience</Text>
              {data.work.length > 0 &&
                data.work.map((work, index) => (
                  <View style={styles.colView} key={index}>
                    <Text>{work.jobTitle}</Text>
                    <Text>{work.jobTitle}</Text>
                    <Text>{work.jobTitle}</Text>
                    <Text>{work.jobTitle}</Text>
                  </View>
                ))}
            </View>
            <View style={styles.colView}>
              <Text>Project</Text>
              <Text style={{ paddingLeft: 15 }}>{data.project}</Text>
            </View>
            <View style={styles.colView}>
              <Text>Education</Text>
              {data.education.length > 0 &&
                data.education.map((edu, index) => (
                  <View style={styles.colView} key={index}>
                    <Text>{edu.qualification}</Text>
                    <Text>{edu.institution}</Text>
                    <Text>{edu.city}</Text>
                    <Text>{edu.year}</Text>
                  </View>
                ))}
            </View>
            <View style={styles.colView}>
              <Text>Skills</Text>
              {data.skills !== "" ? (
                data.skills.map((skill, index) => (
                  <Text style={{ paddingLeft: 15 }} key={index}>
                    skill.value
                  </Text>
                ))
              ) : (
                <></>
              )}
            </View>
            <View style={styles.colView}>
              <Text>Achievements</Text>
              <Text style={{ paddingLeft: 15 }}>{data.achievements}</Text>
            </View>
          </Page>
        </Document>
      }
      fileName="some.pdf"
    ></PDFDownloadLink>
  );
};
