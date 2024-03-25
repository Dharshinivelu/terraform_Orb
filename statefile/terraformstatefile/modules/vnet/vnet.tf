resource "azurerm_virtual_network" "virtual_network" {
  name = var.vnet_name
  location = var.resource_group_location
  resource_group_name = var.resource_group_name
  address_space = [var.network_address_space]
 
  tags = {
    Environment = var.vnet_environment
  }
 
}
 
resource "azurerm_subnet" "aks_subnet" {
  name = var.aks_subnet_address_name
  resource_group_name  =  var.resource_group_name
  virtual_network_name = azurerm_virtual_network.virtual_network.name
  address_prefixes = [var.aks_subnet_address_prefix]
}