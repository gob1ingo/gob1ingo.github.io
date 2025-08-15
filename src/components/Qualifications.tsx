import {useState} from 'react';
import qData from "../data/qualifications.json";
import '../style-sheets/qualifications.css';

function Qualifications() {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const q = qData.qualifications;

    const toggleExpanded = (index: any) => {
        setExpandedIndex(expandedIndex === index ? null : index );
    }

    // TODO: Implement this. 
    return (<></>)
}

export default Qualifications;