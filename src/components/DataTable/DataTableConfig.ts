import { IDataTable } from './types'
const chance = new (require('chance'))()

const testLimit = 10
const testSKUS = Array.from(Array(testLimit).keys()).map((x) => chance.word())
const testDescriptions = Array.from(Array(testLimit).keys()).map((x) => chance.paragraph())
const testUOMs = ['mm', 'cm', 'm', 'inch', 'feet', 'yard', 'ltr', 'gallon']
const testQuantities = Array.from(Array(testLimit).keys()).map((x) => chance.integer({ min: 5, max: 10 }))
const testBatch = Array.from(Array(testLimit).keys()).map((x) => chance.word())

const config: IDataTable.IProps = {
  type: 'form',
  controls: {
    global: {
      visible: true,
      search: true,
      minHeight: 500,
      maxHeight: 750,
      buttons: [
        { align: 'Start', text: 'Filter Data', action: 'FILTER' },
        { align: 'Start', text: 'Customise Table', action: 'CUSTOMISE' },
        { align: 'End', text: 'Add Row', action: 'ADD_ROW' }
      ]
    },
    row: {
      visible: true,
      sendOnBlur: true,
      sendToEndpoint: '/my-test-endpoint',
      buttons: [
        { text: 'Copy', action: 'COPY_ROW' },
        { text: 'Lock', action: 'LOCK_ROW' },
        { text: 'Delete', action: 'DELETE_ROW' },
        { text: 'Load', action: 'LOAD_PAGE', href: '/' }
      ]
    },
    footer: {
      visible: true,
      rowCount: true,
      pagination: {
        pageLimit: 5
      }
    }
  },
  header: [
    { id: 'product_sku', name: 'Stock Keeping Unit (SKU)', visible: true, defaultWidth: 200 },
    {
      id: 'product_description',
      name: 'Product Description',
      visible: true,
      defaultWidth: 400,
      sortable: true,
      resizable: true
    },
    { id: 'unit_of_measure', name: 'Unit of Measure', visible: true, defaultWidth: 200, resizable: true },
    { id: 'quantity', name: 'Quantity', visible: true },
    { id: 'batch', name: 'Batch', visible: true }
  ],
  rows: [
    [
      {
        id: 'product_sku',
        type: 'search',
        filterable: true,
        sendOnBlur: true,
        sendToEndpoint: '/my-test-endpoint',
        sendMethod: 'PUT',
        options: [
          { label: testSKUS[0], value: testSKUS[0] },
          { label: testSKUS[1], value: testSKUS[1] },
          { label: testSKUS[2], value: testSKUS[2] },
          { label: testSKUS[3], value: testSKUS[3] },
          { label: testSKUS[4], value: testSKUS[4] },
          { label: testSKUS[5], value: testSKUS[5] },
          { label: testSKUS[6], value: testSKUS[6] },
          { label: testSKUS[7], value: testSKUS[7] },
          { label: testSKUS[8], value: testSKUS[8] },
          { label: testSKUS[9], value: testSKUS[9] }
        ]
      },
      { id: 'product_description', type: 'string' },
      {
        id: 'unit_of_measure',
        type: 'select',
        multi: true,
        options: [
          { label: testUOMs[0], value: testUOMs[0] },
          { label: testUOMs[1], value: testUOMs[1] },
          { label: testUOMs[2], value: testUOMs[2] },
          { label: testUOMs[3], value: testUOMs[3] },
          { label: testUOMs[4], value: testUOMs[4] },
          { label: testUOMs[5], value: testUOMs[5] },
          { label: testUOMs[6], value: testUOMs[6] },
          { label: testUOMs[7], value: testUOMs[7] }
        ]
      },
      { id: 'quantity', type: 'number', minValue: 5, maxValue: 10 },
      { id: 'batch', type: 'text', maxLength: 5 }
    ]
  ],
  data: [
    {
      product_sku: null,
      product_description: null,
      unit_of_measure: null,
      quantity: null,
      batch: null
    }
  ]
}

const configStandard: IDataTable.IProps = {
  type: 'standard',
  controls: {
    global: {
      visible: true,
      search: true,
      minHeight: 500,
      maxHeight: 750,
      buttons: [
        { align: 'Start', text: 'Filter Data', action: 'FILTER' },
        { align: 'Start', text: 'Customise Table', action: 'CUSTOMISE' }
      ]
    },
    row: {
      visible: false
    },
    footer: {
      visible: true,
      rowCount: true,
      pagination: {
        pageLimit: 5
      }
    }
  },
  header: [
    { id: 'product_sku', name: 'Stock Keeping Unit (SKU)', visible: true, defaultWidth: 200 },
    { id: 'product_description', name: 'Product Description', visible: true, defaultWidth: 400, resizable: true },
    { id: 'unit_of_measure', name: 'Unit of Measure', visible: true, defaultWidth: 200, resizable: true },
    { id: 'quantity', name: 'Quantity', visible: true },
    { id: 'batch', name: 'Batch', visible: true }
  ],
  rows: [
    [{ id: 'product_sku' }, { id: 'product_description' }, { id: 'unit_of_measure' }, { id: 'quantity' }, { id: 'batch' }]
  ],
  data: [
    {
      product_sku: null,
      product_description: null,
      unit_of_measure: null,
      quantity: null,
      batch: null
    }
  ]
}

const configNoControls: IDataTable.IProps = {
  type: 'standard',
  controls: {
    global: {
      visible: false,
      minHeight: 200,
      maxHeight: 500
    },
    row: {
      visible: false
    },
    footer: {
      visible: false
    }
  },
  header: [
    { id: 'product_sku', name: 'Stock Keeping Unit (SKU)', visible: true, defaultWidth: 200 },
    { id: 'product_description', name: 'Product Description', visible: true, defaultWidth: 400, resizable: true },
    { id: 'unit_of_measure', name: 'Unit of Measure', visible: true, defaultWidth: 200, resizable: true },
    { id: 'quantity', name: 'Quantity', visible: true },
    { id: 'batch', name: 'Batch', visible: true }
  ],
  rows: [
    [{ id: 'product_sku' }, { id: 'product_description' }, { id: 'unit_of_measure' }, { id: 'quantity' }, { id: 'batch' }]
  ],
  data: [
    {
      product_sku: null,
      product_description: null,
      unit_of_measure: null,
      quantity: null,
      batch: null
    }
  ]
}

export { testSKUS, testDescriptions, testUOMs, testQuantities, testBatch, config, configStandard, configNoControls }
