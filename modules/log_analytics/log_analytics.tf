resource "azurerm_log_analytics_workspace" "example" {
  name                = var.log_analytics_workspace_name
  location            = var.resource_group_location
  resource_group_name = var.resource_group_name
  sku                 = var.log_analytics_workspace_sku
  retention_in_days   = var.log_analytics_retention_in_days
}

resource "azurerm_application_insights" "example" {
  name                = var.application_insights_name
  location            = var.resource_group_location
  resource_group_name = var.resource_group_name
  workspace_id        = azurerm_log_analytics_workspace.example.id
  application_type    = var.application_insights_type
}

output "instrumentation_key" {
  value = azurerm_application_insights.example.instrumentation_key
}

output "app_id" {
  value = azurerm_application_insights.example.app_id
}