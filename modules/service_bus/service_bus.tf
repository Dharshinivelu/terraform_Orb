resource "azurerm_servicebus_namespace" "example" {
  name                = var.servicebus_namespace_name
  location            = var.resource_group_location
  resource_group_name = var.resource_group_name
  sku                 = var.servicebus_namespace_sku

  tags = {
    source = var.servicebus_tags_source
  }
}

resource "azurerm_servicebus_topic" "example" {
  name         = var.servicebus_topic_name
  namespace_id = azurerm_servicebus_namespace.example.id

  enable_partitioning = var.servicebus_topic_enable_partioning
}

resource "azurerm_servicebus_queue" "example" {
  name         = var.servicebus_queue_name
  namespace_id = azurerm_servicebus_namespace.example.id

  enable_partitioning= var.servicebus_queue_enable_partioning
}