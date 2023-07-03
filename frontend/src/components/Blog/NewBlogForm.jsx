import { useState } from "react";
import Button from "../../ui/Button"
import Input from "../../ui/Input"
import styles from './NewBlogForm.module.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function NewBlogForm() {
  const [value, setValue] = useState('');

  return (
    <form className={styles.form}>
    <div className={styles.inputs}>
        <label htmlFor="title">Title</label>
        <Input type="text" placeholder="Title of blog" name="title" />
        <label htmlFor="title">Country</label>
        <select>
            <option>Country</option>
        </select>
        <label htmlFor="title">Date of travel</label>
        <Input type="date" name="title" />
        <label>Description</label>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        <label htmlFor="title">Blog Image</label>
        <Input type='file' fileText='Blog Image'/>
    </div>
    <Button type='new' style={styles.submitBtn}>Submit</Button>
    </form>
  )
}

export default NewBlogForm
