import React from 'react'
import { Header } from "./assets/Header"
import { Footer } from "./assets/Footer"
import { OnlyInput } from "./tools/OnlyInput"
import { InlineContainer } from "./tools/InlineContainer"
import { EmptySpace } from "./tools/EmptySpace"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { validations } from "./tools/uiTools"

export const Registration = () => {
    const formik = useFormik({
        initialValues:{
            name:"",
            contact:"",
            price:"",
            priceUnit:"",
            state:"",
            city:"",
            areaName:"",
            itemCategory:"",
            itemName:""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required Field").min(2, 'Must be at least 2 characters long'),
            contact: Yup.string().matches( validations.phoneRegExp, 'Phone number is not valid' ).required("Required Field").min(10, "Phone number is short").max(10, "Phone number is not valid"),
            price: Yup.number().required("Required Field"),
            priceUnit: Yup.string().required("Required Field"),
            state: Yup.string().required("Required Field"),
            city: Yup.string().required("Required Field"),
            areaName: Yup.string().required("Required Field"),
            itemCategory: Yup.string().required("Required Field"),
            itemName: Yup.string().required("Required Field"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
  return (
    <div className='regi-container'>
        <Header/>
        <h3 style={{ marginTop: "1rem" }} ><u style={{ textDecorationColor: "#41644A" }}>Reg</u>istration Form Items</h3>
        <InlineContainer>
            <OnlyInput placeholder="Enter Full Name" spanvalue="Full Name" onChange={formik.handleChange} value={formik.values.name} id="name" error ={formik.touched.name && formik.errors.name ? ( formik.errors.name ) : null} />
            <OnlyInput placeholder="Enter Contact No." spanvalue="Contact No." id="contact"  onChange={formik.handleChange} value={formik.values.contact} error={formik.touched.contact && formik.errors.contact ? ( <div>{formik.errors.contact}</div> ) : null}/>
        </InlineContainer>
        <InlineContainer>
            <OnlyInput placeholder="Enter Price" spanvalue="Price" id="price" onChange={formik.handleChange} value={formik.values.price} error={formik.touched.price && formik.errors.price ? ( formik.errors.price ) : null}/>
            <OnlyInput placeholder="Enter Price Unit" spanvalue="Price Unit" id="priceUnit" onChange={formik.handleChange} value={formik.values.priceUnit} error={formik.touched.priceUnit && formik.errors.priceUnit ? ( formik.errors.priceUnit ) : null}/>
        </InlineContainer>
        <InlineContainer>
            <OnlyInput placeholder="Enter State" spanvalue="State" id="state" onChange={formik.handleChange} value={formik.values.state} error={formik.touched.state && formik.errors.state ? ( formik.errors.state ) : null}/>
            <OnlyInput placeholder="Enter City" spanvalue="City" id="city" onChange={formik.handleChange} value={formik.values.city} error={formik.touched.city && formik.errors.city ? ( formik.errors.city ) : null}/>
        </InlineContainer>
        <InlineContainer>
            <OnlyInput placeholder="Enter Area Name" spanvalue="Area Name" id="areaName" onChange={formik.handleChange} value={formik.values.areaName} error={formik.touched.areaName && formik.errors.areaName ? ( formik.errors.areaName ) : null}/>
            <OnlyInput placeholder="Enter Item Category" spanvalue="Item Category" id="itemCategory" onChange={formik.handleChange} value={formik.values.itemCategory} error={formik.touched.itemCategory && formik.errors.itemCategory ? ( formik.errors.itemCategory ) : null}/>
        </InlineContainer>
        <InlineContainer>
            <OnlyInput placeholder="Enter Category" spanvalue="Item Name" id="itemName" onChange={formik.handleChange} value={formik.values.itemName} error={formik.touched.itemName && formik.errors.itemName ? ( formik.errors.itemName ) : null}/>
            <button type="button" className="btn" style={{ marginLeft: "15%", marginTop: "2rem", height:"10%", backgroundColor:"#7AA874", fontWeight:"bold" }} onClick={formik.handleSubmit}>Submit Form</button>
        </InlineContainer>
        <EmptySpace size="2rem" />
        <Footer/>
    </div>
  )
}
