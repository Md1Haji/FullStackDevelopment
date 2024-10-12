import React, { useState } from 'react';
import AccessoryList from './AccessoryList';
import AccessoryEditForm from './AccessoryEditForm';

const AccessoriesPage = () => {
    const [selectedAccessory, setSelectedAccessory] = useState(null);
    const [isEditingAccessory, setIsEditingAccessory] = useState(false);

    const handleAccessoryEditClick = (accessory) => {
        setSelectedAccessory(accessory);
        setIsEditingAccessory(true);
    };

    const handleAccessoryUpdated = (updatedAccessory) => {
        console.log('Accessory updated:', updatedAccessory);
        setIsEditingAccessory(false);
        setSelectedAccessory(null);
        // Here you would typically update your list of accessories
        // This might involve making an API call or updating some state
    };

    return (
        <div>
            <h1>Accessories Management</h1>
            <AccessoryList onAccessoryEditClick={handleAccessoryEditClick} />
            
            {isEditingAccessory && selectedAccessory && (
                <div>
                    <h2>Edit Accessory ID: {selectedAccessory.id}</h2>
                    <AccessoryEditForm
                        accessory={selectedAccessory}
                        onAccessoryUpdated={handleAccessoryUpdated}
                        onClose={() => setIsEditingAccessory(false)}
                    />
                </div>
            )}
        </div>
    );
};

export default AccessoriesPage;