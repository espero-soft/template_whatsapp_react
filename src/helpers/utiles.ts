import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertFromRaw,
  convertToRaw,
} from 'draft-js'
import { User } from '../models/User'
import { fields } from './fields'
import { stateToHTML } from 'draft-js-export-html'

export function addSpacesToPascalCase(str: string): string {
  if (typeof str !== 'string' || str.length === 0) {
    return str
  }

  const result = str.replace(/([a-z])([A-Z])/g, '$1 $2')
  return result.charAt(0).toUpperCase() + result.slice(1)
}

export function ucfirst(str: string): string {
  str = str.toLowerCase()
  if (typeof str !== 'string' || str.length === 0) {
    return str
  }

  if (str.toLowerCase().endsWith('name')) {
    return str
      .split('name')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' Name')
  }
  if (str.toLowerCase().includes('_')) {
    return str
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return addSpacesToPascalCase(str)
}

export function getInputData(label: string): any {
  let data = fields.find((item: any) => item.label == label)
  if (data?.type.startsWith('input')) {
    data = {
      ...data,
      inputType: data?.type.split('input')[1].toLocaleLowerCase(),
    }
  }

  return data
}

export const handleLoadTemplate = (htmlContents: string) => {
  try {
    // Convertir HTML en ContentState
    const contentState = convertFromHTML(htmlContents)

    // Créer un EditorState à partir de ContentState
    const editorState = EditorState.createWithContent(
      ContentState.createFromBlockArray(
        contentState.contentBlocks,
        contentState.entityMap
      )
    )

    // Retourner l'EditorState
    return editorState
  } catch (error) {
    console.error(
      'Une erreur est survenue lors de la conversion du template :',
      error
    )
    // Gérer l'erreur en conséquence
    return null
  }
}
export const EditorStateToHtml = (content: EditorState) => {
  try {
    const rawContentState = convertToRaw(content?.getCurrentContent())

    // Convertir RawDraftContentState en ContentState
    const contentState = convertFromRaw({
      blocks: rawContentState.blocks.map((data: any) => ({
        ...data,
        data: {},
        styles: [], // Ajout pour extraire aussi les styles
      })),
      entityMap: rawContentState.entityMap,
    })

    // Convertir ContentState en HTML
    const contentHTML = stateToHTML(contentState)
    return contentHTML
  } catch (error) {
    console.error(
      'Une erreur est survenue lors de la conversion du template :',
      error
    )
    // Gérer l'erreur en conséquence
    return null
  }
}

const attributsHTML = [
  { balise: 'Global', attributs: ['id', 'class', 'title', 'lang'] },
  { balise: 'A', attributs: ['href', 'target'] },
  { balise: 'Img', attributs: ['src', 'alt', 'width', 'height'] },
  { balise: 'Form', attributs: ['action', 'method', 'name'] },
  { balise: 'Table', attributs: ['border', 'cellspacing', 'cellpadding'] },
  { balise: 'Media', attributs: ['controls', 'autoplay'] },
  { balise: 'List', attributs: ['type'] },
  { balise: 'Input/Textarea', attributs: ['type', 'placeholder'] },
]

export const filterAttributes = (data: Record<string, string>) => {
  const result: { 
    styles: Record<string, string>; 
    attributes: Record<string, string> 
  } = {
    styles: {},
    attributes: {},
  };

  const allAttributes: string[] = attributsHTML.flatMap((elt) => elt.attributs);

  
  Object.entries(data).forEach(([name, value]) => {
    if(name == 'content'){
      return;
    }
    if (allAttributes.includes(name)) {
      result.attributes[name] = value;
    } else {
      result.styles[name] = value;
    }
  });

  return result;
};
export const cleanLink = (link: string) => {
  // Vérifier si l'application est en production et en HTTPS
  const isProduction = process.env.NODE_ENV === 'production'
  const isSecure = window.location.protocol === 'https:'

  // Si en production et non sécurisé, remplacer http par https
  if (isProduction && !isSecure) {
    return link.replace(/^http:/, 'https:')
  }

  // Sinon, renvoyer le lien tel quel
  return link
}


export const getModelFields = (model: string) => {
  if (model == 'user') {
    type RequiredUser = Required<User>
    return Object.keys({} as RequiredUser)
  }
  // if (model == 'tunnel') {
  //   type RequiredUser = Required<Tunnel>
  //   return Object.keys({} as RequiredUser)
  // }
}
