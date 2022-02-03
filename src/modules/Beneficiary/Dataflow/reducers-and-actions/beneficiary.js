import { createSlice } from '@reduxjs/toolkit';


const beneficiaryState = {
	screen: 'beneficiarios/pendentes',
	filterOpened: false,
	isMounthAndYear: true,
	selectedClient: {},
	step: 'beneficiary',
	beneficiaryData: {
		// Finance
		accountType:'',
		bank:'',
		paymentMethod: '',
		personalData: {
			email: '',
			socialName: '',
			birthDate: '',
			sex: '',
			gender: '',
			naturalness: '',
			nationality: '',
			deathDate: '',
			deathInfoDate: '',
			filiation1: '',
			filiation2: '',
		},
		document: {
			rg: '',
			issuer: '',
			uf: '',
			issueDate: '',
		},
		addressDefault: {
			cep: '',
			address: '',
			number: '',
			complement: '',
			district: '',
			county: '',
			uf: '',
		},
		addressOptional: {
			cep: '',
			address: '',
			number: '',
			complement: '',
			referencePoint: '',
			district: '',
			county: '',
			uf: '',
		},
		contact: {
			phone1: '',
			phone2: '',
		}		
	}
};

const beneficiarySlice = createSlice({
	name: 'beneficiary',
	initialState: beneficiaryState,
	reducers: {
		setScreen: (state, action) => {
			state.screen = action.payload
		},
		setFilterOpened: (state) => {
			state.filterOpened = !state.filterOpened
		},
		setFilterType: (state) => {
			state.isMounthAndYear = !state.isMounthAndYear
		},
		setSelectedClient: (state, action) => {
			state.selectedClient = action.payload
		},
		setStep: (state, action) => {
			state.step = action.payload
		},
		setAccountType: (state, action) => {
			state.beneficiaryData.accountType = action.payload
		},
		setBank: (state, action) => {
			state.beneficiaryData.bank = action.payload
		},
		setPaymentMethod: (state, action) => {
			state.beneficiaryData.paymentMethod = action.payload
		},
		// beneficiary

		//setPersonalData
		setEmail: (state, action) => {
			state.beneficiaryData.personalData.email = action.payload
		},
		setSocialName: (state, action) => {
			state.beneficiaryData.personalData.socialName = action.payload
		},
		setBirthDate: (state, action) => {
			state.beneficiaryData.personalData.birthDate = action.payload
		},
		setSex: (state, action) => {
			state.beneficiaryData.personalData.sex = action.payload
		},
		setGender: (state, action) => {
			state.beneficiaryData.personalData.gender = action.payload
		},
		setNaturalness: (state, action) => {
			state.beneficiaryData.personalData.naturalness = action.payload
		},
		setNationality: (state, action) => {
			state.beneficiaryData.personalData.nationality = action.payload
		},
		setDeathDate: (state, action) => {
			state.beneficiaryData.personalData.deathDate = action.payload
		},
		setDeathInfoDate: (state, action) => {
			state.beneficiaryData.personalData.deathInfoDate = action.payload
		},
		setFiliation1: (state, action) => {
			state.beneficiaryData.personalData.filiation1 = action.payload
		},
		setFiliation2: (state, action) => {
			state.beneficiaryData.personalData.filiation2 = action.payload
		},
		// setDocument
		setRg: (state, action) => {
			state.beneficiaryData.document.rg = action.payload
		},
		setIssuer: (state, action) => {
			state.beneficiaryData.document.issuer = action.payload
		},
		setUfRg: (state, action) => {
			state.beneficiaryData.document.ufRG = action.payload
		},
		setIssueDate: (state, action) => {
			state.beneficiaryData.document.issueDate = action.payload
		},
		//setAddressDefault	
		setCepDefault: (state, action) => {
			state.beneficiaryData.addressDefault.cep = action.payload
		},
		setAddressDefault: (state, action) => {
			state.beneficiaryData.addressDefault.address = action.payload
		},
		setNumberDefault: (state, action) => {
			state.beneficiaryData.addressDefault.number = action.payload
		},
		setComplementDefault: (state, action) => {
			state.beneficiaryData.addressDefault.complement = action.payload
		},
		setDistrictDefault: (state, action) => {
			state.beneficiaryData.addressDefault.district = action.payload
		},
		setCountyDefault: (state, action) => {
			state.beneficiaryData.addressDefault.county = action.payload
		},
		setUfDefault: (state, action) => {
			state.beneficiaryData.addressDefault.Uf = action.payload
		},
		//setAddressOptional	
		setCepOptional: (state, action) => {
			state.beneficiaryData.addressOptional.cep = action.payload
		},
		setAddressOptional: (state, action) => {
			state.beneficiaryData.addressOptional.address = action.payload
		},
		setNumberOptional: (state, action) => {
			state.beneficiaryData.addressOptional.number = action.payload
		},
		setComplementOptional: (state, action) => {
			state.beneficiaryData.addressOptional.complement = action.payload
		},
		setReferencePointOptional: (state, action) => {
			state.beneficiaryData.addressOptional.referencePoint = action.payload
		},
		setDistrictOptional: (state, action) => {
			state.beneficiaryData.addressOptional.district = action.payload
		},
		setCountyOptional: (state, action) => {
			state.beneficiaryData.addressOptional.county = action.payload
		},
		setUfOptional: (state, action) => {
			state.beneficiaryData.addressOptional.uf = action.payload
		},
		//setContact
		setPhone1: (state, action) => {
			state.beneficiaryData.contact.phone1 = action.payload
		},
		setPhone2: (state, action) => {
			state.beneficiaryData.phone.phone2 = action.payload
		},
	}
})

//Actions
export const { 
	setScreen, 
	setFilterOpened, 
	setSelectedClient, 
	setStep, 
	setAccountType,
	setBank,
	setPaymentMethod,
	//beneficiary
	setEmail,
	setSocialName,
	setBirthDate,
	setSex,
	setGender,
	setNaturalness,
	setNationality,
	setDeathDate,
	setDeathInfoDate,
	setFiliation1,
	setFiliation2,
	//
	setRg,
	setIssuer,
	setUfRg,
	setIssueDate,
	//
	setCepDefault,
	setAddressDefault,
	setNumberDefault,
	setComplementDefault,
	setDistrictDefault,
	setCountyDefault,
	setUfDefault,
	//
	setCepOptional,
	setAddressOptional,
	setNumberOptional,
	setComplementOptional,
	setReferencePointOptional,
	setDistrictOptional,
	setCountyOptional,
	setUfOptional,
	//
	setPhone1,
	setPhone2
 } = beneficiarySlice.actions;

const beneficiaryReducer = beneficiarySlice.reducer;

export default beneficiaryReducer

