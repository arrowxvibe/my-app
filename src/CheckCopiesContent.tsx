import React, { useState } from 'react';
import { Q2Select, Q2Option } from 'q2-tecton-framework-wrappers/dist/react';

const CheckCopiesContent: React.FC = () => {
    const [selectedCheckType, setSelectedCheckType] = useState<string>('');

      const handleDropdownChange = (event: any) => {
        const selectedValue = event.target.value;
        setSelectedCheckType(selectedValue);
        console.log('Selected value:', selectedValue);
      };

    const checkTypeOptions = [
        { label: 'Shared Branch Check Deposit', value: 'shared-branch' },
        { label: 'SFCU Cleared Check', value: 'sfcu-cleared' },
        { label: 'SFCU Deposited Check', value: 'sfcu-deposited' },
    ];

    return (
        <div className="check-copies-content">
            <p className="check-copies-info">
                You can look in online banking for check copies up to 5 years old.
            </p>
            <p className="check-copies-info">
                Use this feature for copies of older checks.
            </p>
            <div className="form-content">
                <div className="form-field">
                    <label htmlFor="checkType">Select Check Type</label>
                    <Q2Select label="Select Check Type" pop-direction="down"
                      className="mrg-b(0) mrg-t(0)"
                      onClick={handleDropdownChange}>
                        {checkTypeOptions.map(x => <Q2Option value={x.value} display={x.label} />)}
                    </Q2Select>
                </div>
                {/* Placeholder for other form fields */}
                <div className="form-placeholder">
                    <p>Other Check Copies Form Fields Placeholder</p>
                </div>
            </div>
        </div>
    );
};

export default CheckCopiesContent;