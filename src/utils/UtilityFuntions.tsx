import DocumentPicker from 'react-native-document-picker';
import CroppedImagePicker from 'react-native-image-crop-picker';

export const documentPicker = async (documentName: String) => {
    try {
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
            allowMultiSelection: false
        });
        return { ...res[0], documentName: documentName }
    } catch (err) {
        if (DocumentPicker.isCancel(err)) {
            console.log('USER CANCELLED PICKING DOCUMENT');
        } else {
            console.log('UNKNOWN ERROR IN DOCUMENT PICKER  ::', err);
        }
    }
}

export const imagePicker = async function (
    title: string,
    mediaType: 'video' | 'photo' | 'any',
    cropping: boolean | undefined,
    multiple: boolean,
    showCircle: boolean,
    freeStyle: boolean,
) {
    const response = await CroppedImagePicker.openPicker({
        mediaType: mediaType,
        cropping: cropping, // Enable cropping
        cropperCircleOverlay: showCircle, // Set to true if you want a circular crop overlay
        freeStyleCropEnabled: freeStyle, // Enable free-style cropping
        aspectRatio: [1, 1], // Set the aspect ratio for cropping (1:1 in this example)
        includeBase64: true,
        multiple: multiple, // Set to true if you want to allow multiple selection
        cropperToolbarTitle: title,
    });
    console.log('RESPONSE OF SELECTED IMAGE IS *****************************************\n', response.sourceURL, response.path)
    if (response.path !== undefined) {
        let selectedImage = {
            fileName: `OwerTaxi${new Date().getTime()}`,
            fileSize: 0,
            height: 0,
            type: "image/png",
            uri: '',
            width: 0,
            data: ''
        }

        selectedImage.fileSize = response.size,
            selectedImage.height = response.height,
            selectedImage.width = response.width,
            selectedImage.type = response.mime,
            selectedImage.uri = response.path
        return selectedImage
    } else {
        return null
    }
}