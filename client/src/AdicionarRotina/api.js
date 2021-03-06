import { api } from '../services'

const handleUpload = async (
  file,
  nome,
  descricao,
  categoria
) => {
  const formData = new window.FormData()
  formData.append('rotina', file)
  formData.append('nome', nome)
  formData.append('descricao', descricao)
  formData.append('categoria_id', categoria)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return api.post('/api/rotinas', formData, config)
}

const getCategorias = async () => {
  return api.getData('/api/categorias')
}

export { handleUpload, getCategorias }
