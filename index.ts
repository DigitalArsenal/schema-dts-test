import { Person } from "schema-dts";

const podifyPerson = (person: Person) => {
    person.additionalName = "POD";
}

podifyPerson({
    "@type": "Person",
    familyName: "Perrault",
    givenName: "Simon",
    honorificPrefix: "Dr.",
    honorificSuffix: "ing. jr, M.Sc.",
    additionalName: "J",
})
